import request from '@/utils/request';

const STATISTIC_API = '/statistic/top';

// Get statisticTopWinner
export async function statisticTopWinner(body) {
    return request(`${STATISTIC_API}/provider/winners`, {
        method: 'POST',
        body,
    });
}

// Get statisticTopUsers
export async function statisticTopUsers(body) {
    return request(`${STATISTIC_API}/users`, {
        method: 'POST',
        body,
    });
}

// Get statisticTopProducts
export async function statisticTopProducts(body) {
    return request(`${STATISTIC_API}/products`, {
        method: 'POST',
        body,
    });
}

// Get TopRequirememnts
export async function statisticTopRequirememnts(body) {
    return request(`${STATISTIC_API}/requirements`, {
        method: 'POST',
        body,
    });
}
