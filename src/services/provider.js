import request, { dowloandFetch } from '@/utils/request';

const PROVIDER_API = '/provider';

// Get all providers
export async function providerAll(body) {
    return request(`${PROVIDER_API}/all`, {
        method: 'POST',
        body,
    });
}

// Get ByID provider
export async function providerById(body) {
    return request(`${PROVIDER_API}/byid`, {
        method: 'POST',
        body,
    });
}

// Get Search provider
export async function providerSearch(body) {
    return request(`${PROVIDER_API}/search`, {
        method: 'POST',
        body,
    });
}

// Create provider
export async function providerCreate(body) {
    return request(PROVIDER_API, {
        method: 'POST',
        body,
    });
}

// Update provider
export async function providerUpdate(body) {
    return request(PROVIDER_API, {
        method: 'PUT',
        body,
    });
}

// Delete provider
export async function providerDelete(body) {
    return request(PROVIDER_API, {
        method: 'DELETE',
        body,
    });
}

// upload provider
export async function providerDowloandTemplate() {
    return dowloandFetch(`${PROVIDER_API}/download/template`, {
        method: 'GET',
    });
}

// dowloand provider
export async function providerUploadTemplate(body) {
    return request(`${PROVIDER_API}/upload/template`, {
        method: 'POST',
        body,
    });
}

// ------------------------------------------------
// VALIDATE ---------------------------------------
// ------------------------------------------------
export async function providerValidateRuc(body) {
    return request(`${PROVIDER_API}/validate/ruc`, {
        method: 'POST',
        body,
    });
}
