import { requireByRequirement, requireByQuotation, requireDelete } from '../services/require';
import { Modal, message } from 'antd';
export default {
    namespace: 'require',
    state: {
        list: [],

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        currentQuotation: {},
    },
    effects: {
        *byRequirement({ payload }, { select, call, put }){
            const response = yield call(requireByRequirement,payload);
            if(response.success){
                yield put({type: 'querySuccess', payload: { list: response.data }})
            }else{
                Modal.warning({title: 'Error al consultar el requerimiento', content: response.message});
            }
        },
        *byQuotation({ payload }, { call, put }){
            const response = yield call(requireByQuotation,payload);
            if(response.success){
                const onlyQuotation = {...response.data, quotation_details: [] }
                yield put({type: 'querySuccess', payload: { 
                    list: response.data.quotation_details,
                    currentQuotation: onlyQuotation 
                }})
            }else{
                Modal.warning({title: 'Error al consultar el requerimiento', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(requireDelete, payload);
            if (response.success){
                message.success("Se elimino el requerimiento con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al eliminar el requerimiento', content: response.message});
            }
        },
    },
    reducers: {
        querySuccess(state, { payload }){
            return {...state, ...payload };
        },


        addList(state, { payload }){
            // Verificacion si el producto ya existe en la lista de los requerimentos
            if(state.list.find(require => require.product_id === payload.product_id ) != undefined){
                Modal.warning({title: 'Este producto ya está en la lista', content: payload.name});
                return { ...state }
            }
            // Agrgando el nuevo item a la lista de los requerimientos
            const newList = state.list;
            newList.unshift(payload);
            return {...state, list: newList };
        },
        removeItem(state, { payload }){
            const newList = state.list.filter(require => require.product_id !== payload.product_id);
            return {...state, list: newList };
        },
        updateItemByID(state, { payload }){
            // Actualizar
            const newList = state.list.map(require => require.id === payload.id ? {...require, ...payload} : require);
            return {...state, list: newList };
        },
        updateItemByProductID(state, { payload }){
            // actualizar
            const newList = state.list.map(require => require.product_id === payload.product_id ? {...require, ...payload} : require);
            return {...state, list: newList };
        },
        clearList(state, { payload }){
            return {...state, list: [], currentItem: {} };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetRequire(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },
    }
}