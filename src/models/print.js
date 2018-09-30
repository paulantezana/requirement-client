import { quotationComparativeTable, quotationPurchaseOrder } from '../services/quotation';
import { settingDownloadLogo } from '@/services/setting';
import { requirementById } from '@/services/requirement';
import { convertBlobToBase64 } from '@/utils/utils';

import { Modal, message } from 'antd';
import { routerRedux } from 'dva/router';

import { getDataUrl } from '@/utils/generate';

import comparativeTableDefinition from '@/definitions/comparativeTable';
import purchaseOrderDefinition from '@/definitions/purchaseOrder';
import paymentVoucherDF from '@/definitions/paymentVoucherDF';
import memoDF from '@/definitions/memoDF';
import pecosaDF from '@/definitions/pecosaDF';

export default {
    namespace: 'print',
    state: {
        // Estados de control del los modales de impresion
        ccVisible: false,
        ocVisible: false,
        cpVisible: false,
        memoVisible: false,
        pecosaVisible: false,

        // Data de los modales de imprecion
        docCCDataUrl: null,
        docOCDataUrl: null,
        docCPDataUrl: null,
        docMemoDataUrl: null,
        docPecosaDataUrl: null,
    },
    effects: {
        *loadDataCC({ payload }, { select, call, put }) {
            const setting = yield select(({ global }) => global.setting);
            const id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationComparativeTable, { ...payload, id });
            if (response.success) {
                const blob = yield call(settingDownloadLogo, { id: setting.id });
                // Comvertiendo imagen blog en Base64
                const logoBase64 = yield call(convertBlobToBase64, blob);
                // Procesando la definicion del documento
                const docDefinition = yield call(comparativeTableDefinition, {
                    response,
                    setting,
                    logoBase64,
                });
                // Enviando el estado
                const dataUrl = yield call(getDataUrl, docDefinition);
                yield put({ type: 'setDocCCDataUrl', payload: dataUrl });
            } else {
                Modal.error({
                    title: 'Error al consultar el requerimiento',
                    content: response.message,
                });
            }
        },
        *loadDataOC({ payload }, { select, call, put }) {
            const setting = yield select(({ global }) => global.setting);
            const id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationPurchaseOrder, { ...payload, requirement_id: id });
            if (response.success) {
                const blob = yield call(settingDownloadLogo, { id: setting.id });
                // Comvertiendo imagen blog en Base64
                const logoBase64 = yield call(convertBlobToBase64, blob);
                // Procesando la definicion del documento
                const docDefinition = yield call(purchaseOrderDefinition, {
                    response,
                    setting,
                    logoBase64,
                });
                // Enviando el estado
                const dataUrl = yield call(getDataUrl, docDefinition);
                yield put({ type: 'setDocOCDataUrl', payload: dataUrl });
            } else {
                Modal.error({
                    title: 'Error al consultar el requerimiento',
                    content: response.message,
                });
            }
        },
        *loadDataCP({ payload }, { select, call, put }) {
            const setting = yield select(({ global }) => global.setting);
            const id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationPurchaseOrder, { ...payload, requirement_id: id });
            if (response.success) {
                const blob = yield call(settingDownloadLogo, { id: setting.id });
                // Comvertiendo imagen blog en Base64
                const logoBase64 = yield call(convertBlobToBase64, blob);
                // Procesando la definicion del documento
                const docDefinition = yield call(paymentVoucherDF, {
                    response,
                    setting,
                    logoBase64,
                });
                // Enviando el estado
                const dataUrl = yield call(getDataUrl, docDefinition);
                yield put({ type: 'setDocCPDataUrl', payload: dataUrl });
            } else {
                Modal.error({
                    title: 'Error al consultar el requerimiento',
                    content: response.message,
                });
            }
        },
        *loadDataMemo({ payload }, { select, call, put }) {
            const setting = yield select(({ global }) => global.setting);
            const id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationPurchaseOrder, { ...payload, requirement_id: id });
            if (response.success) {
                const blob = yield call(settingDownloadLogo, { id: setting.id });
                // Comvertiendo imagen blog en Base64
                const logoBase64 = yield call(convertBlobToBase64, blob);
                // Procesando la definicion del documento
                const docDefinition = yield call(memoDF, { response, setting, logoBase64 });
                // Enviando el estado
                const dataUrl = yield call(getDataUrl, docDefinition);
                yield put({ type: 'setDocMemoDataUrl', payload: dataUrl });
            } else {
                Modal.error({
                    title: 'Error al consultar el requerimiento',
                    content: response.message,
                });
            }
        },
        *loadDataPecosa({ payload }, { select, call, put }) {
            const setting = yield select(({ global }) => global.setting);
            const id = yield select(({ quotation }) => quotation.requirementID);
            const response = yield call(quotationPurchaseOrder, { ...payload, requirement_id: id });
            if (response.success) {
                const blob = yield call(settingDownloadLogo, { id: setting.id });
                // Comvertiendo imagen blog en Base64
                const logoBase64 = yield call(convertBlobToBase64, blob);
                // Procesando la definicion del documento
                const docDefinition = yield call(pecosaDF, { response, setting, logoBase64 });
                // Enviando el estado
                const dataUrl = yield call(getDataUrl, docDefinition);
                yield put({ type: 'setDocPecosaDataUrl', payload: dataUrl });
            } else {
                Modal.error({
                    title: 'Error al consultar el requerimiento',
                    content: response.message,
                });
            }
        },
    },
    reducers: {
        // Cuadro comparativo
        showPrinterCC(state, { payload }) {
            return { ...state, ...payload, ccVisible: true };
        },
        hidePrinterCC(state, { payload }) {
            return { ...state, ...payload, ccVisible: false, docCCDataUrl: null };
        },

        // Orden de compra
        showPrinterOC(state, { payload }) {
            return { ...state, ...payload, ocVisible: true };
        },
        hidePrinterOC(state, { payload }) {
            return { ...state, ...payload, ocVisible: false, docOCDataUrl: null };
        },

        // Comprobante de pago
        showPrinterCP(state, { payload }) {
            return { ...state, ...payload, cpVisible: true };
        },
        hidePrinterCP(state, { payload }) {
            return { ...state, ...payload, cpVisible: false, docCPDataUrl: null };
        },

        // Memorandum
        showPrinterMemo(state, { payload }) {
            return { ...state, ...payload, memoVisible: true };
        },
        hidePrinterMemo(state, { payload }) {
            return { ...state, ...payload, memoVisible: false, docMemoDataUrl: null };
        },

        // Memorandum
        showPrinterPecosa(state, { payload }) {
            return { ...state, ...payload, pecosaVisible: true };
        },
        hidePrinterPecosa(state, { payload }) {
            return { ...state, ...payload, pecosaVisible: false, docPecosaDataUrl: null };
        },

        // Reset
        resetAll(state, action) {
            return { ...state, currentItem: {}, modalVisible: false, modalType: 'create' };
        },

        // Doc printer definition reducers
        setDocCCDataUrl(state, { payload }) {
            return { ...state, docCCDataUrl: payload };
        },
        setDocOCDataUrl(state, { payload }) {
            return { ...state, docOCDataUrl: payload };
        },
        setDocCPDataUrl(state, { payload }) {
            return { ...state, docCPDataUrl: payload };
        },
        setDocMemoDataUrl(state, { payload }) {
            return { ...state, docMemoDataUrl: payload };
        },
        setDocPecosaDataUrl(state, { payload }) {
            return { ...state, docPecosaDataUrl: payload };
        },
    },
};
