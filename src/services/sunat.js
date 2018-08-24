import { customFetch } from '../utilities/request';

const SUNAT_TOKEN = '989b7941-f931-4983-988e-fa4f2e2be451-edc33212-f1cd-4c8e-9369-3fa671ff5155';

// Consulta a la sunat
export async function sunatRuc(body){
    const newBody = {...body, ...{token: SUNAT_TOKEN}}
    console.log(newBody);
    return customFetch('https://ruc.com.pe/api/v1/ruc', {
        method: 'POST',
        body: newBody,
    })
}