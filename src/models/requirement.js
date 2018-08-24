import { requirementAll, requirementCreate, requirementUpdate, requirementSetRejected, requirementSetClosed, requirementDelete } from '../services/requirement';
import { requireByRequirement } from '../services/require';
import { Modal, message } from 'antd';

import { getDataUrl } from '../utilities/generate';
import { docProperties } from '../config/app';

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

                // Mapenando los tados de la tabla
                let requires = response.data.map(require => {
                    return [
                        require.amount,
                        require.unit_measure,
                        require.product_name,
                        '',
                        '',
                        '',
                    ]
                });

                const rows = requires.length;
                if (rows <= 13) {
                    for (let i = rows; i < 13; i++) {
                        requires.push([
                            ' ',
                            ' ',
                            ' ',
                            ' ',
                            ' ',
                            ' ',
                        ])
                    }
                }

                // Mapeando los encabezados de la tabla
                requires.unshift([ 
                    { text: 'CANTIDAD', style: 'tableHeader' },
                    { text: 'UNIDAD DE MEDIDA', style: 'tableHeader' },
                    { text: 'DESCRIPCION',  style: 'tableHeader' },
                    { text: 'PRECIO UNIDARIO', style: 'tableHeader' },
                    { text: 'PRECIO TOTAL', style: 'tableHeader' },
                    { text: '', style: 'tableHeader' },
                ]);

                const currentDate = new Date();
                let currentDay = currentDate.getDay();
                let currentMounth = currentDate.getMonth();
                let currentYear = currentDate.getFullYear();

                if (currentDay < 10) currentDay = '0' + currentDay;
                if (currentMounth < 10) currentMounth = '0' + currentMounth;

                // Definiendo el documento
                const docDefinition = {
                    info: {
                        title: 'SOLICITUD DE COTIZACION',
                        author: docProperties.author,
                        creator: docProperties.creator,
                    },
                    pageSize: docProperties.pageSize,
                    pageMargins: [ 48, 120, 48, 48 ],
                    header: [
                        { text: setting.company, alignment: 'center',  bold: true, fontSize: 12, margin: [ 0, 50, 0, 4 ] },
                        { text: setting.city, alignment: 'center', margin: [ 0, 4, 0, 4 ] },
                        { text: 'SOLICITUD DE COTIZACION', bold: true, alignment: 'center', margin: [ 0, 4, 0, 4 ] },
                    ],
                
                    content: [
                        {
                            text: 'N°..............................................',
                            alignment: 'right',
                            margin: [ 0, 2, 0, 8 ],
                        },
                        {
                            table: {
                                widths: [ 30, 30, 30, 30 ],
                                body: [
                                    ['N°','DIAS','MES','AÑO'],
                                    ['',currentDay,currentMounth,currentYear],
                                ],
                            },
                            margin: [ 342, 2, 0, 8 ],
                        },
                        { 
                            text: `REFERENCIA :.............................................................................................................................`, 
                            fontSize: 12, 
                            margin: [ 0, 2, 0, 2 ],
                        },
                        { 
                            text: `SEÑOR(ES)   :....................................................................Telefono: ......................................... `, 
                            fontSize: 12,
                            margin: [ 0, 2, 0, 2 ],
                        },
                        { 
                            text: `DIRECCIÓN    :........................................................................RUC: .............................................` , 
                            fontSize: 12, 
                            margin: [ 0, 2, 0, 3 ],
                        },
                        { 
                            text: 'Sirva(n)se cotizarnos precios netos de los artículos que se detallan más abajo, para ser entregados en nuestro almacén del ' + setting.company,
                            margin: [ 0, 2, 0, 8 ],
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: [ 30, 30, '*', 30, 50, 5 ],
                                body: requires,
                            }
                        },
                        {
                            text:'Si por cualquier otra causa no esta en condiciones de cotizar, sirvan(se) firmar y devolver este documento',
                            margin: [ 0, 2, 0, 8 ],
                        },
                        {
                            text:'Si esta en condiciones de cotizar, sirvan (se) UD. (s) hacerlo firmar o devolver este documento “sobre cerrado”',
                            margin: [ 0, 2, 0, 24 ],
                        },
                        
                        {
                            text: 'Plazo de entrega _____________________________             Fecha_______________________________',
                            margin: [ 0, 2, 0, 24 ],
                        },
                        {
                            text: 'Firma del director del abastecimiento ______________________    Firma y cello del proveedor________________________',   
                        },
                    ],
                    footer:[
                        { text: '_____________________________________________________________________________________',  alignment: 'center', color: '#AAAAAA'},
                        { text: docProperties.author, alignment: 'right', fontSize: 8, italics: true, color: '#AAAAAA', margin: [ 0, 0, 72, 0 ] },
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