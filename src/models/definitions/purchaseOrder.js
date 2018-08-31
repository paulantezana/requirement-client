// ------------------------------------------------------------------------------
// ORDEN DE COMPRA --------------------------------------------------------------
// ------------------------------------------------------------------------------

import { rowToCol } from 'utilities/utils';
import moment from 'moment';
import { docProperties } from 'config/app';

const purchaseOrder = async ({response, setting, logoBase64})=> {
    const requires = response.data.ct_response_requires;
    const quotations = response.data.ct_response_quotations;
    const providers = response.data.ct_response_providers;

    return new Promise((resoleve,reject)=>{

        const coreData = rowToCol(requires,quotations);

        // ----------------------------------
        // Preparando los datos de la tabla principal de comparacion
        // ----------------------------------
        const coreTable = coreData.map((require, key) => [
            ((key + 1)< 10) ? `0${key + 1 }` : key + 1,
            require.name,
            require.amount,
            require.unit_measure,
            require.price1,
            require.price1 * require.amount,
            require.price2,
            require.price2 * require.amount,
            require.price3,
            require.price3 * require.amount,
        ]);
        coreTable.push([
            ' ',
            { text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', alignment: 'center' },
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
        ])
        const rows = coreTable.length;
        if (rows <= 13) {
            for (let i = rows; i < 13; i++) {
                coreTable.push([
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                ])
            }
        }
        let totales = {
            total1 : 0,
            total2 : 0,
            total3 : 0,
        };
        coreData.map(require => {
            totales.total1 = totales.total1 + (require.price1 * require.amount)
            totales.total2 = totales.total2 + (require.price2 * require.amount)
            totales.total3 = totales.total3 + (require.price3 * require.amount)
        });
        coreTable.push([
            ' ',
            { text: 'TOTAL', alignment: 'center' },
            ' ',
            ' ',
            ' ',
            totales.total1,
            ' ',
            totales.total2,
            ' ',
            totales.total3,
        ])


        // ------------------------------------------------
        // Calculate current date
        // ------------------------------------------------
        const currentDate = new Date();
        let currentDay = currentDate.getDay();
        let currentMounth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        if (currentDay < 10) currentDay = '0' + currentDay;
        if (currentMounth < 10) currentMounth = '0' + currentMounth;


        // ------------------------------------------------------
        // CREATE DOC DEFINITION
        // ------------------------------------------------------
        const docDefinition = {
            hLineWidth: function (i, node) {
                if (i === 0 || i === node.table.body.length) return 0;
                return (i === node.table.headerRows) ? 1 : 1;
            },
            defaultStyle: {
                font: 'calibri',
                fontSize: 11,
            },
            info: {
                title: 'ORDEN DE COMPRA - GUIA DE INTERNAMIENTO',
                author: docProperties.author,
                creator: docProperties.creator,
            },
            pageOrientation: 'portrait',
            pageSize: docProperties.pageSize,
            pageMargins: [ 48, 130, 48, 48 ],
            header: [
                {
                    margin: [ 48, 40, 0, 4 ],
                    columns: [
                        [
                            {
                                columns: [
                                    { image: logoBase64, width: 40, },
                                    [
                                        { text: setting.company, fontSize: 10, margin: [5, 0, 0, 3] },
                                        { text: setting.city, margin: [ 5, 0, 0, 5 ] },
                                    ]
                                ]
                            }
                        ],
                        {
                            table: {
                                widths: [ 30, 30, 30, 30 ],
                                body: [
                                    ['N°','DIAS','MES','AÑO'],
                                    ['',currentDay,currentMounth,currentYear],
                                ],
                            },
                            margin: [ 57, 2, 0, 8 ],
                        },
                    ]
                },
                { 
                    text: 'ORDEN DE COMPRA - GUIA DE INTERNAMIENTO', 
                    alignment: 'center',  
                    fontSize: 16, 
                    margin: [ 0, 4, 0, 4 ],
                },
            ],
            content: [
                {
                    text: 'REFERENCIA DEL COTIZANTE',
                    alignment: 'center',
                    margin: [ 0, 2, 0, 8 ],
                },
                {
                    table: {
                        widths: [ 60, 45, 45, '*', 45, 45 ],
                        headerRows: 3,
                        body: [
                            [
                                {
                                    columns: [
                                        [
                                            { text: 'Señor(es)                 : ..', margin: [ 0, 4, 0, 4 ] },
                                            { text: 'Direccion                 : ..', margin: [ 0, 4, 0, 4 ] },
                                            { text: 'Le agradecemos enviar a nuestro almacen en : ..', margin: [ 0, 4, 0, 4 ] },
                                            { text: 'Los siguiente           : ..', margin: [ 0, 4, 0, 4 ] },
                                            { text: 'Referencia N°          : ..', margin: [ 0, 4, 0, 4 ] },
                                            { text: 'Factura a nombre de          : ..', margin: [ 0, 4, 0, 4 ] },
                                        ]
                                    ],
                                    colSpan: 6,
                                },
                                {},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [
                                { text: '1 \n ARTICULOS', style: 'tableHeaderTop', colSpan: 4 },
                                {},
                                {},
                                {},
                                { text: '2 \n VALOR', style: 'tableHeaderTop', colSpan: 2 },
                                {},
                            ],
                            [ 
                                { text: 'A \n Codigo', style: 'tableHeader' },
                                { text: 'B \n Cantidad', style: 'tableHeader' },
                                { text: 'C \n Unidad de medida',  style: 'tableHeader' },
                                { text: 'D \n Descripcion', style: 'tableHeader' },
                                { text: 'A \n \n Unitario', style: 'tableHeader' },
                                { text: 'B \n \n Total', style: 'tableHeader' },
                            ],
                            // ...coreTable
                        ],
                    }
                },
                { text: ' ' },
                {
                    table: {
                        widths: [ 116, 116, 115, 115 ],
                        headerRows: 1,
                        body: [
                            [
                                { text: 'ORDEN DE COMPRA', alignment: 'center', colSpan: 2 },
                                {},
                                { text: 'AFECTACION PRESUPUESTAL', alignment: 'center' },
                                { text: 'DISTRIBUCION CONTABLE', alignment: 'center' },
                            ],
                            [
                                {},
                                {},
                                { rowSpan: 2, text: 'Programa' },
                                [
                                    { text: 'CUENTA POR PAGAR' },
                                    { text: '1,621.00' },
                                ],
                            ],
                            [
                                { text: 'Administracion'},
                                { text: 'Jefe de abastecimiento'},
                                {},
                                {},
                            ],
                            [
                                { text: 'NOTA: Esta orden es nula sin la firma mancomunada de abastecimiento el jefe de adquisiciones cada orden de compara se debe  facturar y (2) copias y remitirla a la dirección de la contabilidad. \n Nos reservamos el derecho de devolver de acuerdo con nuestras especificaciones.', colSpan: 2 },
                                { },
                                { text: 'NOTA: ' },
                                { text: 'NOTA: ' },
                            ],
                        ]
                    }
                }
            
            ],
            styles: {
                tableHeader: {
                    fontSize: 8,
                    alignment: 'center',
                },
                tableHeaderTop: {
                    bold: true,
                    fontSize: 11,
                    alignment: 'center',
                },
            }
        }
        
        resoleve(docDefinition);
    })
}

export default purchaseOrder;