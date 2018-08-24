import { providerAll, providerById, providerCreate, providerUpdate, providerDelete,providerSearch } from '../services/provider';
import { Modal, message } from 'antd';
export default {
    namespace: 'provider',
    state: {
        list: [],
        total: null,
        current: null,
        searchText: "",

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        searchResult: [],
    },
    effects: {
        *all({ payload }, { select, call, put }){
            const setting = yield select(({ global }) => global.setting); // Get setting item
            const response = yield call(providerAll,{...payload, limit: setting.item});
            if(response.success){
                yield put({type: 'allSuccess', payload: {
                    list: response.data,
                    total: response.total,
                    current: response.current_page,
                }})
            }else{
                Modal.error({title: 'Error al consultar el proveedor', content: response.message});
            }
        },
        *search({ payload }, { call, put }){
            const response = yield call(providerSearch,payload);
            if(response.success){
                yield put({type: 'searchSuccess', payload: response.data })
            }else{
                Modal.error({title: 'Error al consultar el proveedor', content: response.message});
            }
        },
        *create({ payload }, { call, put }){
            const response = yield call(providerCreate,payload);
            if (response.success){
                yield put({type: 'resetProvider'});
                Modal.success({title: 'Crear proveedor', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al crear proveedor', content: response.message});
            }
        },
        *update({ payload }, { call, put }){
            const response = yield call(providerUpdate, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                yield put({type: 'resetProvider'});
                message.success("Se actualizo el proveedor con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el proveedor', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(providerDelete, payload);
            if (response.success){
                yield put({type: 'resetProvider'});
                message.success("Se elimino el proveedor con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar el proveedor', content: response.message});
            }
        },
    },
    reducers: {
        allSuccess(state, { payload }){
            return {...state, ...payload };
        },
        searchSuccess(state, { payload }){
            return {...state,  searchResult: payload };
        },
        updateSuccess(state, { payload }){
            const newList = state.list.map(provider => provider.id == payload.id ? {...provider, ...payload} : provider);
            return {...state, list: newList };
        },
        setSearchText(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetProvider(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },
    }
}