import request from '@/utils/request';

const REQUIRE_API = '/require';

// Get all requires
export async function requireByRequirement(body) {
    return request(`${REQUIRE_API}/by/requirement`, {
        method: 'POST',
        body,
    });
}

// Get all quotations
export async function requireByQuotation(body) {
    return request(`${REQUIRE_API}/by/quotation`, {
        method: 'POST',
        body,
    });
}

// Get ByID require
export async function requireById(body) {
    return request(`${REQUIRE_API}/byid`, {
        method: 'POST',
        body,
    });
}

// Create require
export async function requireCreate(body) {
    return request(REQUIRE_API, {
        method: 'POST',
        body,
    });
}

// Update require
export async function requireUpdate(body) {
    return request(REQUIRE_API, {
        method: 'PUT',
        body,
    });
}

// Delete require
export async function requireDelete(body) {
    return request(REQUIRE_API, {
        method: 'DELETE',
        body,
    });
}
