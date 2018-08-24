import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// import fontsPdf from './vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
// pdfMake.fonts = {
//     normal: 'arial.ttf',
//     bold: 'arialbd.ttf',
//     italics: 'ariali.ttf',
//     bolditalics: 'arialbi.ttf'
// }
export const getDataUrl = async (docDefinition = {})=>{
    return new Promise((resoleve,reject)=>{
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getDataUrl(dataUrl=>{
            resoleve(dataUrl)
        });
    })
}