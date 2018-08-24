import { 
    quotationAll, 
    quotationComparativeTable,
    quotationCreate, 
    quotationUpdate, 
    quotationDelete, 
    quotationSetWinner 
} from '../services/quotation';
import { requirementById } from '../services/requirement';
import { requireByRequirement } from '../services/require';

import { Modal, message } from 'antd';
import { routerRedux } from 'dva/router';

import { getDataUrl } from '../utilities/generate';
import { docProperties } from '../config/app';

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

        // Data de los modales de imprecion
        docCCDataUrl: null,
        docOCDataUrl: null,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                let index = location.pathname.indexOf('/',location.pathname.indexOf('quote'));
                let param =  location.pathname.substring(index + 1);
                if (location.pathname == `/requirements/quote/${param}`) {
                    if(/^[0-9]*$/.exec(param)){
                        dispatch({
                            type: 'setupApp',
                            payload: parseInt(param),
                        });
                    }else{
                        dispatch(routerRedux.push('/exception/404'));
                    }
                }
            });
        },
    },
    effects: {
        *setupApp({ payload }, { put }){
            yield put({type: 'updateRequirementID', payload});
            yield put({type: 'requirement'});
        },
        // Query mas datos del requerimeinto actual
        *requirement({ payload }, { select, call, put }){
            const requirement_id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(requirementById,{id: requirement_id});
            if(response.success){
                yield put({type: 'requirementSuccess', payload: response.data });
            }else{
                Modal.error({title: 'Error al consultar el requerimiento', content: response.message});
            }
        },

        // Query todo los requerirmientos del requerimeinto actual
        *getComparativeTable({ payload }, { select, call, put }){
            const id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationComparativeTable,{...payload, id});
            if(response.success){
                yield put({ type: 'comparativeTableSuccess', payload: response.data })
            }else{
                Modal.error({title: 'Error al consultar cuadro comparativo ', content: response.message});
            }
        },
        // Query todo los requerirmientos del requerimeinto actual
        *all({ payload }, { select, call, put }){
            const requirement_id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationAll,{...payload, requirement_id});
            if(response.success){
                yield put({type: 'allSuccess', payload: { 
                    list: response.data,
                    total: response.total,
                }})
            }else{
                Modal.error({title: 'Error al consultar las cotizaciones', content: response.message});
            }
        },
        *create({ payload }, { select, call, put }){
            const requires = yield select(({ require }) => require.list); // Obteniendo los datos de lista de los requires            
            const requirement_id = yield select(({ quotation }) => quotation.requirementID); // Obteniedno el id del actual requerimiento en proceso

            // Preparando los parametrso de requerimiento detalle
            const quotation_details = requires.map(require => {
                return {
                    unit_price: require.unit_price,
                    require_id: require.id,
                }
            })
            const provider_id = parseInt(payload.provider_id); // parseando el provider_id aun numero entero

            // Realizando la peticion
            const response = yield call(quotationCreate,{
                ...payload, 
                provider_id, 
                requirement_id, 
                quotation_details 
            });
            
            if (response.success){
                yield put({type: 'resetQuotation'});
                Modal.success({title: 'Crear cotizacion', content: response.message});
                yield put({type: 'requirement'});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al crear cotizacion', content: response.message});
            }
        },
        *update({ payload }, { select, call, put }){
            const requires = yield select(({ require }) => require.list); // Obteniendo los datos de lista de los requires     
            const quotation_id = yield select(({ quotation }) => quotation.currentItem.id); // Obteniendo el id de la cotizacion actual
            const requirement_id = yield select(({ quotation }) => quotation.requirementID); // Obteniedno el id del actual requerimiento en proceso
            
            // Preparando los parametrso de requerimiento detalle
            const quotation_details = requires.map(require => {
                return {
                    id: require.id,
                    unit_price: require.unit_price,
                    quotation_id,
                }
            });

            const provider_id = parseInt(payload.provider_id); // parseando el provider_id aun numero entero

            // Realizando la peticion
            const response = yield call(quotationUpdate,{
                ...payload, 
                provider_id,
                requirement_id, 
                quotation_details 
            });

            if (response.success){
                yield put({type: 'resetQuotation'});
                yield put({type: 'requirement'});
                message.success("Se actualizo el cotizacion con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar el cotizacion', content: response.message});
            }
        },
        *winner({ payload }, { call, put }){
            const response = yield call(quotationSetWinner, {
                requirement_id: payload.requirement_id, 
                id: payload.id
            });
            if (response.success){
                yield put({type: 'resetQuotation'});
                yield put({type: 'requirement'});
                yield put({type: 'all'});
                message.success("Se actualizo el cotizacion con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el cotizacion', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(quotationDelete, payload);
            if (response.success){
                yield put({type: 'resetQuotation'});
                message.success("Se elimino el cotizacion con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar el cotizacion', content: response.message});
            }
        },
        *loadDataCC({ payload }, { select, call, put }){
            const setting = yield select(({ global }) => global.setting);
            // const response = yield call(requireByRequirement,{ requirement_id: payload.id });
            if (true){

                // Mapenando los tados de la tabla
                // let requires = response.data.map(require => {
                //     return [
                //         require.amount,
                //         require.unit_measure,
                //         require.product_name,
                //         '',
                //         '',
                //         '',
                //     ]
                // });

                // const rows = requires.length;
                // if (rows <= 13) {
                //     for (let i = rows; i < 13; i++) {
                //         requires.push([
                //             ' ',
                //             ' ',
                //             ' ',
                //             ' ',
                //             ' ',
                //             ' ',
                //         ])
                //     }
                // }

                // // Mapeando los encabezados de la tabla
                // requires.unshift([ 
                //     { text: 'CANTIDAD', style: 'tableHeader' },
                //     { text: 'UNIDAD DE MEDIDA', style: 'tableHeader' },
                //     { text: 'DESCRIPCION',  style: 'tableHeader' },
                //     { text: 'PRECIO UNIDARIO', style: 'tableHeader' },
                //     { text: 'PRECIO TOTAL', style: 'tableHeader' },
                //     { text: '', style: 'tableHeader' },
                // ]);

                // const currentDate = new Date();
                // let currentDay = currentDate.getDay();
                // let currentMounth = currentDate.getMonth();
                // let currentYear = currentDate.getFullYear();

                // if (currentDay < 10) currentDay = '0' + currentDay;
                // if (currentMounth < 10) currentMounth = '0' + currentMounth;

                // Definiendo el documento
                const docDefinition = {
                    info: {
                        title: 'CUADRO COMPARATIVO DE COTIZACIONES',
                        author: docProperties.author,
                        creator: docProperties.creator,
                    },
                    pageOrientation: 'landscape',
                    pageSize: docProperties.pageSize,
                    pageMargins: [ 48, 120, 48, 48 ],
                    header: [
                        { text: setting.company, alignment: '',  bold: true, fontSize: 12, margin: [ 48, 40, 0, 4 ] },
                        { text: setting.city, alignment: '', margin: [ 48, 4, 0, 4 ] },
                        { text: 'CUADRO COMPARATIVO DE COTIZACIONES', bold: true, alignment: 'center', margin: [ 0, 4, 0, 4 ] },
                    ],
                
                    content: [
                        {
                            text: 'N°..............................................',
                            alignment: 'right',
                            margin: [ 0, 2, 0, 8 ],
                        },
                    
                    ],
                    styles: {
                        tableHeader: {
                            bold: true, 
                            fontSize: 10,
                        },
                    }
                }
                console.log(docDefinition);
                const dataUrl = yield call(getDataUrl,docDefinition);
                yield put({type: 'setDocCCDataUrl', payload: dataUrl})
            }else{
                Modal.error({title: 'Error al consultar el requerimiento', content: response.message});
            }
        },
    },
    reducers: {
        updateRequirementID(state, { payload }){
            return {...state, requirementID: payload };
        },
        requirementSuccess(state, { payload }){
            return {...state, requirementItem: payload };
        },
        allSuccess(state, { payload }){
            return {...state, ...payload };
        },
        comparativeTableSuccess(state, { payload }){
            return {...state, comparativeTable: payload };
        },
        search(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },

        // Cuadro comparativo
        showPrinterCC(state, { payload }){
            return {...state, ...payload, ccVisible: true };
        },
        hidePrinterCC(state, { payload }){
            return {...state, ...payload, ccVisible: false, docCCDataUrl: null };
        },

        // Orden de compra
        showPrinterOC(state, { payload }){
            return {...state, ...payload, ocVisible: true };
        },
        hidePrinterOC(state, { payload }){
            return {...state, ...payload, ocVisible: false, docOCDataUrl: null };
        },

        // Reset
        resetQuotation(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },


        // Doc printer definition reducers
        setDocCCDataUrl(state, { payload }){
            return {...state, docCCDataUrl: payload };
        },
        setDocOCDataUrl(state, { payload }){
            return {...state, docOCDataUrl: payload };
        },
    }
}