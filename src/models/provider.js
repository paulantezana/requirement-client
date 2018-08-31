import { 
    providerAll,
    providerCreate, 
    providerUpdate, 
    providerDelete,
    providerSearch,
    providerValidateRuc,
    providerDowloandTemplate,
    providerUploadTemplate,
} from '../services/provider';
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

        modalUploadVisible: false,
        modalExportVisible: false,

        searchResult: [],

        validRuc: true,
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
        *validateRuc({ payload }, { call, put }){
            const response = yield call(providerValidateRuc, { ruc: payload });
            yield put({
                type: 'validateRucSuccess', payload: { validateRuc: response.success }
            });
        },
        *uploadProviders({ payload }, { call, put }){
            let data = new FormData();
            data.append('file',payload.file);
            const response = yield call(providerUploadTemplate,data);
            if (response.success){
                yield put({type: 'resetProvider'});
                Modal.success({title: 'Importar proveedores', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Algo salió mal', content: response.message});
            }
        },
        *downloadTemp({ payload }, { call, put }){
            const response = yield call(providerDowloandTemplate);
            try {
                let url = window.URL.createObjectURL(response);
                let a = document.createElement('a');
                a.href = url;
                a.download = "templateProviders.xlsx";
                a.click(); 
            } catch (error) {
                Modal.warning({title: 'Algo salió mal', content: response.message});
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
        // Modals ------------------------
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        toggleModalUpload(state, { payload }){
            return {...state, modalUploadVisible: payload };
        },
        toggleModalExport(state, { payload }){
            return {...state, modalExportVisible: payload };
        },
        // End Mmodals ---------------------
        resetProvider(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },
        validateRucSuccess(state, { payload }){
            return {...state, ...payload};
        },
    }
}