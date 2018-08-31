import { settingUpdate, settingGlobal, settingUploadLogo } from '../services/setting';
import { statisticTopWinner, statisticTopUsers, statisticTopProducts, statisticTopRequirememnts } from '../services/statistic';
import { userUpdate } from '../services/user';
import { Modal } from 'antd';
import { getAuthorityUser } from 'utilities/authority';
export default {
    namespace: 'global',
    state: {
        collapsed: false,
        setting: {},
        user: {},
        success: false,

        topWinners: {},
        topUsers: {},
        topProducts: {},
        topRequirememnts: {},
    },
    effects: {
        *globalSetting({ payload }, { call, put }){
            const tokenUser = getAuthorityUser();
            const response = yield call(settingGlobal,{ id: tokenUser.user.id });
            if (response.success){
                yield put({ type: 'settingSuccess', payload: response });
            }
        },
        *updateProfile({ payload }, { call, put }){
            const response = yield call(userUpdate, payload);
            if(response.success){
                yield put({
                    type: 'updateProfileSuccess',
                    payload
                });
            }
        },
        *updateSetting({ payload }, { call, put }){
            const response = yield call(settingUpdate, payload);
            if(response.success){
                yield put({
                    type: 'updateSettingSuccess',
                    payload
                });
            }
        },

        *uploadLogo({ payload }, { call, put }){
            let data = new FormData();
            data.append('logo',payload.logo);
            data.append('id',payload.id);
            const response = yield call(settingUploadLogo,data);
            if (response.success){
                Modal.success({title: 'Setting', content: response.message});
            }else{
                Modal.error({title: 'Error subir el avatar usuario', content: response.message});
            }
        },

        ///////////////////
        *topWinners({ payload }, { call, put }){
            const response = yield call(statisticTopWinner);
            if (response.success){
                yield put({ type: 'statisticSuccess', payload: {
                    topWinners: {
                        data: response.data,
                        total: response.total,
                    }
                } });
            }else{
                Modal.error({title: 'Error al consultar las estadisticas', content: response.message});
            }
        },
        *topUsers({ payload }, { call, put }){
            const response = yield call(statisticTopUsers);
            if (response.success){
                yield put({ type: 'statisticSuccess', payload: {
                    topUsers: {
                        data: response.data,
                        total: response.total,
                    }
                } });
            }else{
                Modal.error({title: 'Error al consultar las estadisticas', content: response.message});
            }
        },
        *topProducts({ payload }, { call, put }){
            const response = yield call(statisticTopProducts);
            if (response.success){
                yield put({ type: 'statisticSuccess', payload: {
                    topProducts: {
                        data: response.data,
                        total: response.total,
                    }
                } });
            }else{
                Modal.error({title: 'Error al consultar las estadisticas', content: response.message});
            }
        },
        *topRequirememnts({ payload }, { call, put }){
            const response = yield call(statisticTopRequirememnts);
            if (response.success){
                yield put({ type: 'statisticSuccess', payload: {
                    topRequirememnts: {
                        data: response.data,
                        total: response.total,
                    }
                } });
            }else{
                Modal.error({title: 'Error al consultar las estadisticas', content: response.message});
            }
        },
    },
    reducers: {
        changeLayoutCollapsed(state, { payload }) {
            return {...state, collapsed: payload };
        },
        updateProfileSuccess(state, action){
            return {...state, user: Object.assign({},state.user,action.payload) };
        },
        updateSettingSuccess(state, action){
            return {...state, setting: Object.assign({},state.setting,action.payload) };
        },
        settingSuccess(state, { payload }){
            return {
                ...state,
                setting: payload.setting,
                user: payload.user,
                success: payload.success
            }
        },
        statisticSuccess(state, { payload }) {
            return {...state, ...payload };
        },
    }
}