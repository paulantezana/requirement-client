import request from '../utilities/request';

const QUOTATION_API = '/quotation';

// Get all quotation
export async function quotationAll(body) { 
    return request(`${QUOTATION_API}/all`,{
        method: 'POST',
        body
    })
}

// Get Comparative Table
export async function quotationComparativeTable(body) { 
    return request(`${QUOTATION_API}/comparativetable`,{
        method: 'POST',
        body
    })
}

// Get ByID quotation
export async function quotationById(body) { 
    return request(`${QUOTATION_API}/byid`,{
        method: 'POST',
        body
    })
}

// Create quotation
export async function quotationCreate(body) { 
    return request(QUOTATION_API,{
        method: 'POST',
        body
    })
}

// Update quotation
export async function quotationUpdate(body) { 
    return request(QUOTATION_API,{
        method: 'PUT',
        body
    })
}

// Update quotation set winner
export async function quotationSetWinner(body) { 
    return request(`${QUOTATION_API}/set/winner`,{
        method: 'PUT',
        body
    })
}

// Delete quotation
export async function quotationDelete(body) { 
    return request(QUOTATION_API,{
        method: 'DELETE',
        body
    })
}