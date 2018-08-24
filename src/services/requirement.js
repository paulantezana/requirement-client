import request from '../utilities/request';

const REQUIREMENT_API = '/requirement';

// Get all requirements
export async function requirementAll(body) { 
    return request(`${REQUIREMENT_API}/all`,{
        method: 'POST',
        body
    })
}

// Get ByID requirements
export async function requirementById(body) { 
    return request(`${REQUIREMENT_API}/byid`,{
        method: 'POST',
        body
    })
}

// Create requirements
export async function requirementCreate(body) { 
    return request(REQUIREMENT_API,{
        method: 'POST',
        body
    })
}

// Update requirements
export async function requirementUpdate(body) { 
    return request(REQUIREMENT_API,{
        method: 'PUT',
        body
    })
}

// Update requirements set rejected
export async function requirementSetRejected(body) { 
    return request(`${REQUIREMENT_API}/set/rejected`,{
        method: 'PUT',
        body
    })
}

// Update requirements set rejected
export async function requirementSetClosed(body) { 
    return request(`${REQUIREMENT_API}/set/closed`,{
        method: 'PUT',
        body
    })
}

// Delete requirements
export async function requirementDelete(body) { 
    return request(REQUIREMENT_API,{
        method: 'DELETE',
        body
    })
}