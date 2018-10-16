import {
    productAll,
    productCreate,
    productUpdate,
    productDelete,
    productSearch,
} from '@/services/product';
import { Modal, message } from 'antd';
export default {
    namespace: 'product',
    state: {
        list: [],
        total: 0,
        current: 0,
        searchText: '',

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        searchResult: [],
    },
    effects: {
        *all({ payload }, { select, call, put }) {
            const setting = yield select(({ global }) => global.setting); // Get setting item
            const response = yield call(productAll, { ...payload, limit: setting.item });
            if (response.success) {
                yield put({
                    type: 'allSuccess',
                    payload: {
                        list: response.data,
                        total: response.total,
                        current: response.current_page,
                    },
                });
            } else {
                Modal.error({ title: 'Error al consultar el producto', content: response.message });
            }
        },
        *search({ payload }, { call, put }) {
            const response = yield call(productSearch, payload);
            if (response.success) {
                yield put({ type: 'searchSuccess', payload: response.data });
            } else {
                Modal.error({ title: 'Error al consultar el producto', content: response.message });
            }
        },
        *create({ payload }, { call, put }) {
            const response = yield call(productCreate, payload);
            if (response.success) {
                yield put({ type: 'resetProduct' });
                Modal.success({ title: 'Crear producto', content: response.message });
                yield put({ type: 'all' });
            } else {
                Modal.error({ title: 'Error al crear producto', content: response.message });
            }
        },
        *update({ payload }, { call, put }) {
            const response = yield call(productUpdate, payload);
            if (response.success) {
                yield put({ type: 'updateSuccess', payload });
                yield put({ type: 'resetProduct' });
                message.success('Se actualizo el producto con el id = ' + payload.id);
            } else {
                Modal.error({
                    title: 'Error al actualizar el producto',
                    content: response.message,
                });
            }
        },
        *delete({ payload }, { call, put }) {
            const response = yield call(productDelete, payload);
            if (response.success) {
                yield put({ type: 'resetProduct' });
                message.success('Se elimino el producto con el id = ' + payload.id);
                yield put({ type: 'all' });
            } else {
                Modal.error({
                    title: 'Error al actualizar el producto',
                    content: response.message,
                });
            }
        },
    },
    reducers: {
        allSuccess(state, { payload }) {
            return { ...state, ...payload };
        },
        searchSuccess(state, { payload }) {
            return { ...state, searchResult: payload };
        },
        updateSuccess(state, { payload }) {
            const newList = state.list.map(
                product => (product.id == payload.id ? { ...product, ...payload } : product)
            );
            return { ...state, list: newList };
        },
        setSearchText(state, { payload }) {
            return { ...state, searchText: payload };
        },
        showModal(state, { payload }) {
            return { ...state, ...payload, modalVisible: true };
        },
        resetProduct(state, action) {
            return { ...state, currentItem: {}, modalVisible: false, modalType: 'create' };
        },
    },
};
