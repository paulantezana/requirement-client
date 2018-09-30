import {
    statisticTopWinner,
    statisticTopUsers,
    statisticTopProducts,
    statisticTopRequirememnts,
} from '@/services/statistic';
import { Modal } from 'antd';

export default {
    namespace: 'chart',
    state: {
        topWinners: {},
        topUsers: {},
        topProducts: {},
        topRequirememnts: {},
    },

    effects: {
        *topWinners({ payload }, { call, put }) {
            const response = yield call(statisticTopWinner);
            if (response.success) {
                yield put({
                    type: 'statisticSuccess',
                    payload: {
                        topWinners: {
                            data: response.data,
                            total: response.total,
                        },
                    },
                });
            } else {
                Modal.error({
                    title: 'Error al consultar las estadisticas',
                    content: response.message,
                });
            }
        },
        *topUsers({ payload }, { call, put }) {
            const response = yield call(statisticTopUsers);
            if (response.success) {
                yield put({
                    type: 'statisticSuccess',
                    payload: {
                        topUsers: {
                            data: response.data,
                            total: response.total,
                        },
                    },
                });
            } else {
                Modal.error({
                    title: 'Error al consultar las estadisticas',
                    content: response.message,
                });
            }
        },
        *topProducts({ payload }, { call, put }) {
            const response = yield call(statisticTopProducts);
            if (response.success) {
                yield put({
                    type: 'statisticSuccess',
                    payload: {
                        topProducts: {
                            data: response.data,
                            total: response.total,
                        },
                    },
                });
            } else {
                Modal.error({
                    title: 'Error al consultar las estadisticas',
                    content: response.message,
                });
            }
        },
        *topRequirememnts({ payload }, { call, put }) {
            const response = yield call(statisticTopRequirememnts);
            if (response.success) {
                yield put({
                    type: 'statisticSuccess',
                    payload: {
                        topRequirememnts: {
                            data: response.data,
                            total: response.total,
                        },
                    },
                });
            } else {
                Modal.error({
                    title: 'Error al consultar las estadisticas',
                    content: response.message,
                });
            }
        },
    },

    reducers: {
        statisticSuccess(state, { payload }) {
            return { ...state, ...payload };
        },
        statisticReset() {
            return {
                topWinners: {},
                topUsers: {},
                topProducts: {},
                topRequirememnts: {},
            };
        },
    },
};
