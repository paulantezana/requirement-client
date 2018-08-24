import request from '../utilities/request';

const PROVIDER_API = '/setting';

// Get ByID provider
export async function settingOnly() { 
    return request(`${PROVIDER_API}`,{
        method: 'GET',
    })
}

// Get Global settings
export async function settingGlobal(body) { 
    return request(`${PROVIDER_API}/global`,{
        method: 'POST',
        body,
    })
}

// Update provider
export async function settingUpdate(body) { 
    return request(PROVIDER_API,{
        method: 'PUT',
        body,
    })
}
