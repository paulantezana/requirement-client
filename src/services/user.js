import request from '@/utils/request';

const USER_API = '/user';

// User Login
export async function login(body) {
    return request(`${USER_API}/login`, {
        method: 'POST',
        body,
    });
}

// User forgot search email
export async function userForgotSearch(body) {
    return request(`${USER_API}/forgot/search`, {
        method: 'POST',
        body,
    });
}

// User forgot validate key change password
export async function userForgotValidate(body) {
    return request(`${USER_API}/forgot/validate`, {
        method: 'POST',
        body,
    });
}

// User forgot change password
export async function userForgotChange(body) {
    return request(`${USER_API}/forgot/change`, {
        method: 'POST',
        body,
    });
}

// Get all users
export async function userAll(body) {
    return request(`${USER_API}/all`, {
        method: 'POST',
        body,
    });
}

// Get ByID user
export async function userById(body) {
    return request(`${USER_API}/byid`, {
        method: 'POST',
        body,
    });
}

// Create user
export async function userCreate(body) {
    return request(USER_API, {
        method: 'POST',
        body,
    });
}

// Update user
export async function userUpdate(body) {
    return request(USER_API, {
        method: 'PUT',
        body,
    });
}

// Update user
export async function userResetPassword(body) {
    return request(`${USER_API}/reset/password`, {
        method: 'POST',
        body,
    });
}

// Update user
export async function userChangePassword(body) {
    return request(`${USER_API}/change/password`, {
        method: 'POST',
        body,
    });
}

// Delete user
export async function userDelete(body) {
    return request(USER_API, {
        method: 'DELETE',
        body,
    });
}

// POST upload avatar
export async function userUploadAvatar(body) {
    return request(`${USER_API}/upload/avatar`, {
        method: 'POST',
        body,
    });
}
