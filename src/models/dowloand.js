import { downloadRequirementAll } from '../services/dowloand';
import { Modal } from 'antd';
export default {
    namespace: 'dowloand',
    state: {
        loading: false,
    },
    effects: {
        *requirementAll({ payload }, { call, put }){
            yield put({type: 'start'})
            const response = yield call(downloadRequirementAll);
            try {
                let url = window.URL.createObjectURL(response);
                let a = document.createElement('a');
                a.href = url;
                a.download = "requerimeintoall.xlsx";
                a.click(); 
            } catch (error) {
                Modal.warning({title: 'Error al consultar el requerimiento', content: response.message});
            }
            yield put({type: 'finish'})
        },

    },
    reducers: {
        start(state){
            return {...state, loading: false};
        },
        finish(state){
            return {...state, loading: false};
        },
    }
}