// ------------------------------------------------------------------------------
// TABLA COMPARATIVO ------------------------------------------------------------
// ------------------------------------------------------------------------------
import { rowToCol } from 'utilities/utils';
import moment from 'moment';
import { docProperties } from 'config/app';

const comparativeTable = async ({response, setting, logoBase64})=> {
    const requires = response.data.ct_response_requires;
    const quotations = response.data.ct_response_quotations;
    const providers = response.data.ct_response_providers;

    return new Promise((resoleve,reject)=>{

        const coreData = rowToCol(requires,quotations);

        // ----------------------------------
        // Preparando los datos proveedores
        // ----------------------------------
        let companies = [
            [
               { text:  'Nombre o Razón Social ................................'},
               { text:  providers[0] ? providers[0].name : ' ', alignment: 'center'},
               { text:  providers[1] ? providers[1].name : ' ', alignment: 'center'},
               { text:  providers[2] ? providers[2].name : ' ', alignment: 'center'},
            ],
            [
                { text:  'Representante ..............................................'},
                { text:  providers[0] ? providers[0].manager : ' ', alignment: 'center'},
                { text:  providers[1] ? providers[1].manager : ' ', alignment: 'center'},
                { text:  providers[2] ? providers[2].manager : ' ', alignment: 'center'},
            ],
            [
                { text:  'Fecha de entrega ofrecida ...........................'},
                { text:  providers[0] ? moment(providers[0].deliver_date).format('DD/MM/YYYY') : ' ', alignment: 'center'},
                { text:  providers[1] ? moment(providers[1].deliver_date).format('DD/MM/YYYY') : ' ', alignment: 'center'},
                { text:  providers[2] ? moment(providers[2].deliver_date).format('DD/MM/YYYY') : ' ', alignment: 'center'},
            ],
        ];

        // ----------------------------------
        // Preparando los datos de la tabla principal de comparacion
        // ----------------------------------
        const coreTable = coreData.map((require, key) => [
            ((key + 1)< 10) ? `0${key + 1 }` : key + 1, // Numeracion suseciva
            require.name,
            require.amount,
            require.unit_measure,
            require.price1 ? require.price1 : ' ',
            require.price1 ? require.price1 * require.amount : ' ',
            require.price2 ? require.price2 : ' ',
            require.price2 ? require.price2 * require.amount : ' ',
            require.price3 ? require.price3 : ' ',
            require.price3 ? require.price3 * require.amount : ' ',
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
            totales.total1 = require.price1 ? totales.total1 + (require.price1 * require.amount) : 0;
            totales.total2 = require.price2 ? totales.total2 + (require.price2 * require.amount) : 0;
            totales.total3 = require.price3 ? totales.total3 + (require.price3 * require.amount) : 0;
        });
        coreTable.push([
            ' ',
            { text: 'TOTAL', alignment: 'center' },
            ' ',
            ' ',
            ' ',
            totales.total1 ? totales.total1 : ' ', 
            ' ',
            totales.total2 ? totales.total2 : ' ',
            ' ',
            totales.total3 ? totales.total3 : ' ',
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
            defaultStyle: {
                font: 'calibri',
                fontSize: 11,
            },
            info: {
                title: 'CUADRO COMPARATIVO DE COTIZACIONES',
                author: docProperties.author,
                creator: docProperties.creator,
            },
            pageOrientation: 'landscape',
            pageSize: docProperties.pageSize,
            pageMargins: [ 48, 120, 48, 48 ],
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
                            width: 270, 
                            text: 'CUADRO COMPARATIVO DE COTIZACIONES', 
                            alignment: 'center',  
                            fontSize: 18, 
                            margin: [ 0, 4, 0, 4 ],
                        },
                        [
                            {
                                text: 'N°.....................................................',
                                alignment: 'right',
                                margin: [ 0, 2, 48, 8 ],
                            },
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
                    ]
                },

            ],
            content: [
                {
                    text: 'REFERENCIA DEL COTIZANTE',
                    alignment: 'center',
                    margin: [ 0, 2, 0, 8 ],
                },
                {
                    margin: [ 192, 2, 0, 16 ],
                    table: {
                        widths: [ 220, 99, 99, 99 ],
                        headerRows: 0,
                        body: companies,
                    }
                },
                {
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 0.5 : 0.5;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 0.5 : 0.5;
                        },
                        // hLineColor: function (i, node) {
                        //     return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
                        // },
                        // vLineColor: function (i, node) {
                        //     return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
                        // },
                        // paddingLeft: function(i, node) { return 4; },
                        // paddingRight: function(i, node) { return 4; },
                        // paddingTop: function(i, node) { return 2; },
                        // paddingBottom: function(i, node) { return 2; },
                        fillColor: function (i, node) {
                            if(i < 2 ) return '#F1F1F1';
                            return null; 
                        }
                    },
                    table: {
                        widths: [ 22, '*', 45, 45, 45, 45, 45, 45, 45, 45 ],
                        headerRows: 2,
                        body: [
                            [
                                { text: '1 \n ARTICULOS', style: 'tableHeaderTop', colSpan: 4 },
                                {},
                                {},
                                {},
                                { text: '2 \n PRECIOS NETOS', style: 'tableHeaderTop', colSpan: 6 },
                                {},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [ 
                                { text: 'A \n N° de Orden', style: 'tableHeader' },
                                { text: 'B \n \n Descripción', style: 'tableHeader' },
                                { text: 'C \n \n Cantidad',  style: 'tableHeader' },
                                { text: 'D \n Unidad de medida', style: 'tableHeader' },
                                { text: 'A \n \n Unitario', style: 'tableHeader' },
                                { text: 'B \n \n Total', style: 'tableHeader' },
                                { text: 'A \n \n Unitario', style: 'tableHeader' },
                                { text: 'B \n \n Total', style: 'tableHeader' },
                                { text: 'A \n \n Unitario', style: 'tableHeader' },
                                { text: 'B \n \n Total', style: 'tableHeader' },
                            ],
                            ...coreTable
                        ],
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

export default comparativeTable;