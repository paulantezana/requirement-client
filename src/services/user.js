import request from '../utilities/request';

const USER_API = '/user';

// User Login
export async function login(body) {
    return request(`${USER_API}/login`,{
        method: 'POST',
        body
    })
}

// User Register
export async function register(body) {
    return request(`${USER_API}/register`,{
        method: 'POST',
        body
    })
}

// User forgout search email
export async function userForgoutSearch(body) { 
    return request(`${USER_API}/forgout/serach`,{
        method: 'POST',
        body
    })
}

// User forgout validate key change password
export async function userForgoutValidate(body) { 
    return request(`${USER_API}/forgout/validate`,{
        method: 'POST',
        body
    })
}

// User forgout change password
export async function userForgoutChange(body) { 
    return request(`${USER_API}/forgout/change`,{
        method: 'POST',
        body
    })
}

// Get all users
export async function userAll(body) { 
    return request(`${USER_API}/all`,{
        method: 'POST',
        body
    })
}

// Get ByID user
export async function userById(body) { 
    return request(`${USER_API}/byid`,{
        method: 'POST',
        body
    })
}

// Create user
export async function userCreate(body) { 
    return request(USER_API,{
        method: 'POST',
        body
    })
}

// Update user
export async function userUpdate(body) { 
    return request(USER_API,{
        method: 'PUT',
        body
    })
}

// Update user
export async function userResetPassword(body) { 
    return request(`${USER_API}/reset/password`,{
        method: 'POST',
        body
    })
}


// Update user
export async function userChangePassword(body) { 
    return request(`${USER_API}/change/password`,{
        method: 'POST',
        body
    })
}

// Delete user
export async function userDelete(body) { 
    return request(USER_API,{
        method: 'DELETE',
        body
    })
}

// POST upload avatar
export async function userUploadAvatar(body) { 
    return request(`${USER_API}/upload/avatar`,{
        method: 'POST',
        body
    })
}