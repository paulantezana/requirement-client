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
                { text: setting.company_name.toUpperCase(), alignment:'center', bold: true, fontSize: 11, margin: [ 48, -50, 48, 2 ] },
                { text: `"${setting.city.toUpperCase()}"`, alignment: 'center', bold: true, fontSize: 16, margin: [ 48, 2, 48, 2  ] },
                { text: 'REQUERIMIENTO', alignment: 'center', bold: true, fontSize: 13, margin: [ 48, 4, 48, 0 ] },
                { text: '___________________________________________________________________________________________', alignment: 'center',  margin: [ 48, -4, 48, 4 ] },
            ],
        
            content: [
                { 
                    text: `MEMORANDUM Nº        - 2017/D-IESTPV-S`, 
                    fontSize: 12, 
                    bold: true,
                    margin: [ 0, 2, 0, 2 ],
                },
                {
                    margin: [ 0, 4, 0, 4 ],
                    table: {
                        widths: [ 150, 200 ],
                        body: [
                            ['DE', ': Mgt. LOURDES ELCIRA ALVARES INFANTAS'],
                            ['', `: Directora General del ${setting.company_short_name}`,],
                            ['', ''],
                            ['A', ': UNIDAD DE ADMINISTRACION'],
                            ['', ''],
                            ['ASUNTO', ': GIRO DE CHEQUE POR ADQUISICION'],
                            ['', ''],
                            ['FECHA', ': Sicuani. 25 de Setiembre del 2017'],
                        ]
                    },
                    layout: 'noBorders',
                },
                { 
                    text: `===================================================================================`, 
                    fontSize: 12,
                    margin: [ 0, 2, 0, 2 ],
                },
                {
                    text: `Por intermedio del presente se le autoriza a Ud.  Realizar el giro de cheque a nombre de EDHUIN EBER ENRIQUEZ CORDOVA, por el monto de (S/. 3,062.00) pago por la adquisición de materiales de escritorio para la atención de diferentes oficinas jefaturas y docentes del I.E.S.T.P VILCANOTA – SICUANI, SEGÚN FACCTURA N.º 0001 – 000599 Y 000600, H/R, S/C, C/C, O/C, PECOSA (C/P N.º 0382)`,
                    margin: [ 0, 8, 0, 8 ],
                },
                {
                    text: `                                          Debidamente sustentado con el comprobante de pago que se adjunta en cumplimiento a las normas gubernamentales y presupuesto para el sector público del año 2017`,
                    margin: [ 0, 8, 0, 8 ],
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