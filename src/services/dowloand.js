import { dowloandFetch } from '../utilities/request';

const DOWNLOAND_API = '/download';

// Get all products
export async function downloadRequirementAll() { 
    return dowloandFetch(`${DOWNLOAND_API}/requirement/all`,{
        method: 'GET',
    })
}