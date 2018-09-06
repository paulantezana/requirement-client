// ------------------------------------------------------------------------------
// MEMORANDUM -------------------------------------------------------------------
// ------------------------------------------------------------------------------
import { docProperties } from 'config/app';

const memoDF = async ({response, setting, logoBase64})=> {
    return new Promise((resoleve,reject)=>{
        // Definiendo el documento
        const docDefinition = {
            defaultStyle: {
                font: 'calibri',
                fontSize: 11,
            },
            info: {
                title: 'REQUERIMIENTO',
                author: docProperties.author,
                creator: docProperties.creator,
            },
            pageSize: docProperties.pageSize,
            pageMargins: [ 48, 115, 48, 48 ],
            header: [
                { image: logoBase64, width: 50, margin: [ 48, 35, 0, 4 ] },
                { text: setting.company.toUpperCase(), alignment:'center', bold: true, fontSize: 11, margin: [ 48, -50, 48, 2 ] },
                { text: `"${setting.city.toUpperCase()}"`, alignment: 'center', bold: true, fontSize: 16, margin: [ 48, 2, 48, 2  ] },
                { text: 'REQUERIMIENTO', alignment: 'center', bold: true, fontSize: 13, margin: [ 48, 4, 48, 0 ] },
                { text: '___________________________________________________________________________________________', alignment: 'center',  margin: [ 48, -4, 48, 4 ] },
            ],
        
            content: [
                { 
                    text: `Lugar y Fecha :.........................................................................................................................................`, 
                    fontSize: 12, 
                    margin: [ 0, 2, 0, 2 ],
                },
                { 
                    text: `Solicitante       :........................................................................................................................................ `, 
                    fontSize: 12,
                    margin: [ 0, 2, 0, 2 ],
                },
                { 
                    text: `Destino            :........................................................................................................................................` , 
                    fontSize: 12, 
                    margin: [ 0, 2, 0, 16 ],
                },
                { 
                    margin: [ 0, 100, 0, 4 ],
                    text: '---------------------------------------',
                    alignment: 'center',
                },
            ],
            footer:[
                { text: '_____________________________________________________________________________________',  alignment: 'center', color: '#AAAAAA'},
                { text: docProperties.author, alignment: 'right', fontSize: 8, italics: true, color: '#AAAAAA', margin: [ 0, 0, 72, 0 ] },
            ],
            styles: {
                tableHeader: {
                    bold: true, 
                    fontSize: 10,
                    alignment: 'center',
                },
            }
        }
        resoleve(docDefinition);
    })
}

export default memoDF;