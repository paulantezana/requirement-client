import { 
    login, 
    userCreate, 
    userUpdate, 
    userResetPassword,
    userChangePassword,
    userAll, 
    userDelete, 
    userForgotSearch, 
    userForgotValidate, 
    userForgotChange,
    userUploadAvatar,
} from '../services/user';

import { setAuthority, destroy, getAuthorityUser } from '../utilities/authority';
import { Modal, message } from 'antd';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'user',
    state: {
        list: [],
        total: null,
        current: null,
        searchText: "",

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        forgotStep: 0,
        forgotID: 0,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                if (location.pathname == '/user/forgot') {
                    dispatch({
                        type: 'resetForgot',
                    });
                }
            });
        },
    },
    effects: {
        *login({ payload }, { call, put }){
            const response = yield call(login,payload);
            if(response.success){
                setAuthority(response.data.token,payload.remember);
                yield put(routerRedux.push('/'));
                message.success(response.message);
            }else{
                Modal.error({title: "Login",content: response.message})
            }
        },
        *logout({payload},{call,put}){
            yield destroy();
            yield put(routerRedux.push('/user/login'));
        },
        *forgotSearch({payload},{call,put}){
            const response = yield call(userForgotSearch,payload);
            if(response.success){
                yield put({type: 'forgotSuccess',payload: { forgotStep: 1, forgotID: response.data }})
            }else{
                Modal.error({title: "Error al buscar una cuenta",content: response.message})
            }
        },
        *forgotValidate({payload},{ select, call,put}){
            const id = yield select(({ user }) => user.forgotID);
            const response = yield call(userForgotValidate,{...payload, id});
            if(response.success){
                yield put({type: 'forgotSuccess',payload: { forgotStep: 2 }})
            }else{
                Modal.error({title: "Error al validar el código",content: response.message})
            }
        },
        *forgotChange({payload},{ select, call,put}){
            const id = yield select(({ user }) => user.forgotID);
            const response = yield call(userForgotChange,{...payload, id});
            if(response.success){
                Modal.success({title: "Cambiar contraseña",content: response.message})
                yield put({type: 'forgotSuccess',payload: { forgotStep: 3, forgotID: 0 }})
                yield put(routerRedux.push('/user/login'));
            }else{
                Modal.error({title: "Error al cambiar la contraseña",content: response.message})
            }
        },

        *all({ payload }, { select, call, put }){
            const setting = yield select(({ global }) => global.setting); // Get setting item
            const response = yield call(userAll,{...payload, limit: setting.item});
            if (response.success){
                yield put({type: 'allSuccess', payload: {
                    list: response.data,
                    total: response.total,
                    current: response.current_page,
                }})
            }else{
                Modal.error({title: 'Error al consultar el Usuario', content: response.message});
            }
        },
        *create({ payload }, { call, put }){
            const response = yield call(userCreate,payload);
            if (response.success){
                yield put({type: 'resetUser'});
                Modal.success({title: 'Crear usuario', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al crear usuario', content: response.message});
            }
        },
        *update({ payload }, { call, put }){
            const response = yield call(userUpdate, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                message.success(response.message);
            }else{
                Modal.error({title: 'Error al actualizar usuario', content: response.message});
            }
        },
        *changePassword({ payload }, { call, put }){
            const response = yield call(userChangePassword, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                message.success(response.message);
            }else{
                Modal.error({title: 'Error al actualizar usuario', content: response.message});
            }
        },
        *resetPassword({ payload }, { call, put }){
            console.log(payload);
            const response = yield call(userResetPassword, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                message.success(response.message);
            }else{
                Modal.error({title: 'Error al actualizar usuario', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(userDelete, payload);
            if (response.success){
                yield put({type: 'resetUser', payload})
                message.success("Se elimino el usuario con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar usuario', content: response.message});
            }
        },
        *uploadAvatar({ payload }, { call, put }){
            let data = new FormData();
            data.append('picture',payload.picture);
            data.append('id',payload.id);
            const response = yield call(userUploadAvatar,data);
            if (response.success){
                yield put({type: 'resetUser'});
                Modal.success({title: 'Subir avatar', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error subir el avatar usuario', content: response.message});
            }
        },
    },
    reducers: {
        forgotSuccess(state, { payload }){
            return {...state, ...payload}
        },

        
        allSuccess(state, { payload }){
            return {...state, ...payload };
        },
        updateSuccess(state, { payload }){
            const newList = state.list.map(user => user.id == payload.id ? {...user, ...payload} : user);
            return {...state, list: newList };
        },
        search(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetUser(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create', forgotStep: 0, forgotID: 0 };
        },
        resetForgot(state, action){
            return {...state, forgotStep: 0, forgotID: 0 };
        },
    }
}