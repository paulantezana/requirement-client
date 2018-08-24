import request from '../utilities/request';

const PRODUCT_API = '/product';

// Get all products
export async function productAll(body) { 
    return request(`${PRODUCT_API}/all`,{
        method: 'POST',
        body
    })
}

// Get ByID product
export async function productById(body) { 
    return request(`${PRODUCT_API}/byid`,{
        method: 'POST',
        body
    })
}

// Get Search product
export async function productSearch(body) { 
    return request(`${PRODUCT_API}/search`,{
        method: 'POST',
        body
    })
}

// Create product
export async function productCreate(body) { 
    return request(PRODUCT_API,{
        method: 'POST',
        body
    })
}

// Update product
export async function productUpdate(body) { 
    return request(PRODUCT_API,{
        method: 'PUT',
        body
    })
}

// Delete product
export async function productDelete(body) { 
    return request(PRODUCT_API,{
        method: 'DELETE',
        body
    })
}