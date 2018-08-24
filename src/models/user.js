import { 
    login, 
    register, 
    userById, 
    userCreate, 
    userUpdate, 
    userResetPassword,
    userChangePassword,
    userAll, 
    userDelete, 
    userForgoutSearch, 
    userForgoutValidate, 
    userForgoutChange,
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

        loading: false,
        forgoutStep: 0,
        forgoutID: 0,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                if (location.pathname == '/user/forgot') {
                    dispatch({
                        type: 'resetForgout',
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
        *forgoutSearch({payload},{call,put}){
            const response = yield call(userForgoutSearch,payload);
            if(response.success){
                yield put({type: 'forgotSuccess',payload: { forgoutStep: 1, forgoutID: response.data }})
            }else{
                Modal.error({title: "Error al buscar una cuenta",content: response.message})
            }
        },
        *forgoutValidate({payload},{ select, call,put}){
            const id = yield select(({ user }) => user.forgoutID);
            const response = yield call(userForgoutValidate,{...payload, id});
            if(response.success){
                yield put({type: 'forgotSuccess',payload: { forgoutStep: 2 }})
            }else{
                Modal.error({title: "Error al validar el código",content: response.message})
            }
        },
        *forgoutChange({payload},{ select, call,put}){
            const id = yield select(({ user }) => user.forgoutID);
            const response = yield call(userForgoutChange,{...payload, id});
            if(response.success){
                Modal.success({title: "Cambiar contraseña",content: response.message})
                yield put({type: 'forgotSuccess',payload: { forgoutStep: 3, forgoutID: 0 }})
                yield put(routerRedux.push('/user/login'));
            }else{
                Modal.error({title: "Error al cambiar la contraseña",content: response.message})
            }
        },
        *register({payload},{call,put}){
            const response = yield call(register,payload);
            if(response.success){
                Modal.success({title: "Registrar usuario",content: response.message})
                yield put(routerRedux.push('/user/login'));
            }else{
                Modal.error({title: "Registrar usuario",content: response.message})
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
        loginSuccess(state, action){
            return {...state, loading: false}
        },
        registerSuccess(state, action){
            return {...state, loading: false}
        },

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
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create', forgoutStep: 0, forgoutID: 0 };
        },
        resetForgout(state, action){
            return {...state, forgoutStep: 0, forgoutID: 0 };
        },
    }
}