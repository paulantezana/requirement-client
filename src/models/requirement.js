import { Modal, message } from 'antd';

import { 
    requirementAll, 
    requirementCreate, 
    requirementUpdate, 
    requirementSetRejected, 
    requirementSetClosed, 
    requirementDelete 
} from '../services/requirement';
import { requireByRequirement } from '../services/require';
import { settingDownloadLogo } from '../services/setting';


import { getDataUrl } from '../utilities/generate';
import { convertBlobToBase64 } from '../utilities/utils';

import solicitudeDF from './definitions/solicitudeDF';

export default {
    namespace: 'requirement',
    state: {
        list: [],
        total: null,
        current: null,
        searchText: "",

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        quote: false,

        scVisible: false,
        docSCDataUrl: null,
    },
    effects: {
        *all({ payload }, { select, call, put }){
            const setting = yield select(({ global }) => global.setting); // Get setting item
            const response = yield call(requirementAll,{...payload, limit: setting.item});
            if(response.success){
                yield put({type: 'allSuccess', payload: {
                    list: response.data,
                    total: response.total,
                    current: response.current_page,
                }})
            }else{
                Modal.error({title: 'Error al consultar el requerimiento', content: response.message});
            }
        },
        *create({ payload }, { select, call, put }){
            const requires = yield select(({ require }) => require.list); // Get require list
            const response = yield call(requirementCreate,{...payload, requires});
            if (response.success){
                yield put({type: 'resetRequirement'});
                Modal.success({title: 'Crear requerimiento', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al crear requerimiento', content: response.message});
            }
        },
        *update({ payload }, { select, call, put }){
            const requires = yield select(({ require }) => require.list); // Get require list
            const response = yield call(requirementUpdate, {...payload, requires});
            if (response.success){
                yield put({type: 'resetRequirement'});
                message.success("Se actualizo el requerimiento con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar el requerimiento', content: response.message});
            }
        },
        *rejected({ payload }, { call, put }){
            const response = yield call(requirementSetRejected, { id: payload.requirement_id });
            if (response.success){
                yield put({type: 'resetRequirement'});
                message.success("Se actualizo el requerimiento con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el requerimiento', content: response.message});
            }
        },
        *finished({ payload }, { call, put }){
            const response = yield call(requirementSetClosed, { id: payload.requirement_id });
            if (response.success){
                yield put({type: 'resetRequirement'});
                message.success("Se actualizo el requerimiento con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el requerimiento', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(requirementDelete, payload);
            if (response.success){
                yield put({type: 'resetRequirement'});
                message.success("Se elimino el requerimiento con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al eliminar el requerimiento', content: response.message});
            }
        },
        *loadDataPrinter({ payload }, { select, call, put }){
            const setting = yield select(({ global }) => global.setting);
            const response = yield call(requireByRequirement,{ requirement_id: payload.id });
            if (response.success){
                const logoBlob = yield call(settingDownloadLogo,{ id: setting.id });   
                // Comvertiendo imagen blog en Base64
                const logoBase64 = yield call(convertBlobToBase64,logoBlob)
                // Procesando la definicion del documento
                const docDefinition = yield call(solicitudeDF,{response,setting,logoBase64})
                // Enviando el estado
                const dataUrl = yield call(getDataUrl,docDefinition);
                yield put({type: 'setDocSCDataUrl', payload: dataUrl})
            }else{
                Modal.error({title: 'Error al consultar el requerimiento', content: response.message});
            }
        },
    },
    reducers: {
        allSuccess(state, { payload }){
            return {...state, ...payload };
        },
        setSearchText(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        showPrinterSC(state, { payload }){
            return {...state, ...payload, scVisible: true };
        },
        hidePrinterSC(state, { payload }){
            return {...state, ...payload, scVisible: false, docSCDataUrl: null };
        },
        resetRequirement(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },

        // Requires detalles de los requerimientos
        addRequire(state, { payload }){
            const newList = state.requires;
            newList.unshift(payload);
            return {...state, requires: newList };
        },
        removeRequire(state, { payload }){
            return {...state, ...payload };
        },
        clearRequire(state, { payload }){
            return {...state, requires: [] };
        },

        // Doc printer definition reducers
        setDocSCDataUrl(state, { payload }){
            return {...state, docSCDataUrl: payload };
        }
    }
}