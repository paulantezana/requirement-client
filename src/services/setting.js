import request, { dowloandFetch } from '@/utils/request';

const SETTING_API = '/setting';

// Get ByID setting
export async function settingOnly() {
    return request(`${SETTING_API}`, {
        method: 'GET',
    });
}

// Get Global settings
export async function settingGlobal(body) {
    return request(`${SETTING_API}/global`, {
        method: 'POST',
        body,
    });
}

// Update setting
export async function settingUpdate(body) {
    return request(SETTING_API, {
        method: 'PUT',
        body,
    });
}

// POST upload logo
export async function settingUploadLogo(body) {
    return request(`${SETTING_API}/upload/logo`, {
        method: 'POST',
        body,
    });
}

// DOWLOAND
export async function settingDownloadLogo() {
    return dowloandFetch(`${SETTING_API}/download/logo`, {
        method: 'GET',
    });
}
