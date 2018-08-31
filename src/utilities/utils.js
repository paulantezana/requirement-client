/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
    return reg.test(path);
}

// Convert data blob to base64
export const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
});

export const rowToCol = (data, item)=> {
    let separate = data.length;

    // Creando un array con un array que representa cada columna
    function page(offset, limit, dataset){;
        let response = []
        for (let i = offset; i < limit + offset; i++) {
            let json = `{"price${dataset[i].sequence}":${dataset[i].unit_price}}`;
            let row = JSON.parse(json);
            response.push({...dataset[i],...row})
        }
        return response;
    }    
    let sData = [];
    for (let i = 0; i < item.length; i+=separate) {
        
        sData.push(page(i,separate,item));
    }

    // Creando las columnas
    let res = [];
    for (let i = 0; i < data.length; i++) {
       let aux = {};
       sData.map(item=>{
           aux = {...aux,...item[i]}
       })
       res.push({...data[i], ...aux});
    }
    return res;
}