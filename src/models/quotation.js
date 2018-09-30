import {
    quotationAll,
    quotationComparativeTable,
    quotationCreate,
    quotationUpdate,
    quotationDelete,
    quotationSetWinner,
} from '@/services/quotation';
import { requirementById } from '@/services/requirement';

import { Modal, message } from 'antd';
import { routerRedux } from 'dva/router';

import { rowToCol } from '@/utils/utils';

export default {
    namespace: 'quotation',
    state: {
        list: [],
        total: null,

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        // Comparative table
        comparativeTable: [],

        // Estados que indican en que requerimeinto se esta trabajando
        // Se tienen que cargar antes que cualquier otro dato
        requirementItem: {},
        requirementID: 0,

        // Estados de control del los modales de impresion
        ccVisible: false,
        ocVisible: false,
        ctzVisible: false,
        memoVisible: false,

        // Data de los modales de imprecion
        docCCDataUrl: null,
        docOCDataUrl: null,
        docMemoDataUrl: null,
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                let index = location.pathname.indexOf('/', location.pathname.indexOf('quote'));
                let param = location.pathname.substring(index + 1);
                if (location.pathname == `/requirements/quote/${param}`) {
                    if (/^[0-9]*$/.exec(param)) {
                        dispatch({
                            type: 'setupApp',
                            payload: parseInt(param),
                        });
                    } else {
                        dispatch(routerRedux.push('/exception/404'));
                    }
                }
            });
        },
    },
    effects: {
        *setupApp({ payload }, { put }) {
            yield put({ type: 'updateRequirementID', payload });
            yield put({ type: 'requirement' });
        },
        // Query mas datos del requerimeinto actual
        *requirement({ payload }, { select, call, put }) {
            const requirement_id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(requirementById, { id: requirement_id });
            if (response.success) {
                yield put({ type: 'requirementSuccess', payload: response.data });
            } else {
                Modal.error({
                    title: 'Error al consultar el requerimiento',
                    content: response.message,
                });
            }
        },

        // Query todo los requerirmientos del requerimeinto actual
        *getComparativeTable({ payload }, { select, call, put }) {
            const id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationComparativeTable, { ...payload, id });
            if (response.success) {
                // Agregando un enumeracion sucesiva a la lista
                const requires = response.data.ct_response_requires.map(
                    (item, key) => (item ? { ...item, num: key + 1 } : {})
                );

                // Refactorizando la lista
                const newData = rowToCol(requires, response.data.ct_response_quotations);
                yield put({ type: 'comparativeTableSuccess', payload: newData });
            } else {
                Modal.error({
                    title: 'Error al consultar cuadro comparativo ',
                    content: response.message,
                });
            }
        },

        // Query todo los requerirmientos del requerimeinto actual
        *all({ payload }, { select, call, put }) {
            const requirement_id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationAll, { ...payload, requirement_id });
            if (response.success) {
                yield put({
                    type: 'allSuccess',
                    payload: {
                        list: response.data,
                        total: response.total,
                    },
                });
            } else {
                Modal.error({
                    title: 'Error al consultar las cotizaciones',
                    content: response.message,
                });
            }
        },
        *create({ payload }, { select, call, put }) {
            const requires = yield select(({ require }) => require.list); // Obteniendo los datos de lista de los requires
            const requirement_id = yield select(({ quotation }) => quotation.requirementID); // Obteniedno el id del actual requerimiento en proceso

            // Preparando los parametrso de requerimiento detalle
            const quotation_details = requires.map(require => {
                return {
                    unit_price: require.unit_price,
                    require_id: require.id,
                };
            });
            const provider_id = parseInt(payload.provider_id); // parseando el provider_id aun numero entero

            // Realizando la peticion
            const response = yield call(quotationCreate, {
                ...payload,
                provider_id,
                requirement_id,
                quotation_details,
            });

            if (response.success) {
                yield put({ type: 'resetQuotation' });
                Modal.success({ title: 'Crear cotizacion', content: response.message });
                yield put({ type: 'requirement' });
                yield put({ type: 'all' });
                yield put({ type: 'getComparativeTable' }); // Update comparative table
            } else {
                Modal.error({ title: 'Error al crear cotizacion', content: response.message });
            }
        },
        *update({ payload }, { select, call, put }) {
            const requires = yield select(({ require }) => require.list); // Obteniendo los datos de lista de los requires
            const quotation_id = yield select(({ quotation }) => quotation.currentItem.id); // Obteniendo el id de la cotizacion actual
            const requirement_id = yield select(({ quotation }) => quotation.requirementID); // Obteniedno el id del actual requerimiento en proceso

            // Preparando los parametrso de requerimiento detalle
            const quotation_details = requires.map(require => {
                return {
                    id: require.id,
                    unit_price: require.unit_price,
                    quotation_id,
                };
            });

            const provider_id = parseInt(payload.provider_id); // parseando el provider_id aun numero entero

            // Realizando la peticion
            const response = yield call(quotationUpdate, {
                ...payload,
                provider_id,
                requirement_id,
                quotation_details,
            });

            if (response.success) {
                yield put({ type: 'resetQuotation' });
                yield put({ type: 'requirement' });
                message.success('Se actualizo el cotizacion con el id = ' + payload.id);
                yield put({ type: 'all' });
                yield put({ type: 'getComparativeTable' }); // Update comparative table
            } else {
                Modal.error({
                    title: 'Error al actualizar el cotizacion',
                    content: response.message,
                });
            }
        },
        *winner({ payload }, { call, put }) {
            const response = yield call(quotationSetWinner, {
                requirement_id: payload.requirement_id,
                id: payload.id,
            });
            if (response.success) {
                yield put({ type: 'resetQuotation' });
                yield put({ type: 'requirement' });
                yield put({ type: 'all' });
                yield put({ type: 'getComparativeTable' }); // Update comparative table
                message.success('Se actualizo el cotizacion con el id = ' + payload.id);
            } else {
                Modal.error({
                    title: 'Error al actualizar el cotizacion',
                    content: response.message,
                });
            }
        },
        *delete({ payload }, { call, put }) {
            const response = yield call(quotationDelete, payload);
            if (response.success) {
                yield put({ type: 'resetQuotation' });
                message.success('Se elimino el cotizacion con el id = ' + payload.id);
                yield put({ type: 'all' });
            } else {
                Modal.error({
                    title: 'Error al actualizar el cotizacion',
                    content: response.message,
                });
            }
        },
    },
    reducers: {
        updateRequirementID(state, { payload }) {
            return { ...state, requirementID: payload };
        },
        requirementSuccess(state, { payload }) {
            return { ...state, requirementItem: payload };
        },
        allSuccess(state, { payload }) {
            return { ...state, ...payload };
        },
        comparativeTableSuccess(state, { payload }) {
            return { ...state, comparativeTable: payload };
        },
        search(state, { payload }) {
            return { ...state, searchText: payload };
        },
        showModal(state, { payload }) {
            return { ...state, ...payload, modalVisible: true };
        },

        // Reset
        resetQuotation(state, action) {
            return { ...state, currentItem: {}, modalVisible: false, modalType: 'create' };
        },
    },
};
