// ------------------------------------------------------------------------------
// COMPROBANTE DE PAGO ----------------------------------------------------------
// ------------------------------------------------------------------------------
import { rowToCol } from 'utilities/utils';
import moment from 'moment';
import { docProperties } from 'config/app';

const paymentVoucher = async ({response, setting, logoBase64})=> {
    return new Promise((resoleve,reject)=>{

        const coreData = response.data;

        // ----------------------------------
        // Preparando los datos de la tabla principal de comparacion
        // ----------------------------------
        const coreTable = coreData.map((require, key) => [
            require.code,
            require.amount,
            require.unit_measure,
            require.description,
            require.unit_price,
            require.total,
        ]);
        coreTable.push([
            ' ',
            ' ',
            ' ',
            { text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', alignment: 'center' },
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
                ])
            }
        }
        let total = 0;
        coreData.map(require => {
            total = require.total + total;
        });
        coreTable.push([
            ' ',
            ' ',
            ' ',
            ' ',
            { text: 'TOTAL', alignment: 'center' },
            total,
        ])

        console.log(coreTable);


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
                title: 'COMPROBANTE DE PAGO',
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
                                        { text: setting.company_name, fontSize: 10, margin: [5, 0, 0, 3] },
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
                            margin: [ 68.5, 2, 0, 8 ],
                            layout: {
                                hLineWidth: function (i, node) {
                                    return 0.5;
                                },
                                vLineWidth: function (i, node) {
                                    return 0.5;
                                },
                            },
                        },
                    ]
                },
                { 
                    text: 'COMPROBANTE DE PAGO', 
                    alignment: 'center',  
                    fontSize: 16, 
                    margin: [ 0, 4, 0, 4 ],
                },
            ],
            content: [
                {
                    table: {
                        widths: [ 50, '*' ],
                        headerRows: 0,
                        body: [
                            ['NOMBRE :','EDHUIN EBER ENRIQUEZ CORDOVA'],
                            ['SON        :','TRE MIL SESENTA Y UNO CON 00/100 NUEVOS SOLES'],
                        ],
                    }
                },
                {
                    table: {
                        widths: ['*'],
                        headerRows: 0,
                        body: [
                            ['IMPORTE QUE SE GIRA A LA ORDEN DE: EDHUIN EBER ENRÍQUEZ CÓRDOBA, PAGO POR LA ADQUISICIÓN DE MATERIALES DE ESCRITORIO PARA LA ATENCIÓN DE DIFERENTES OFICINAS JEFATURAS Y DOCENTES DEL I.E.S.T.P VILCANOTA – SICUANI, SEGÚN FACCTURA N.º 0001 – 000599 Y 000600, H/R, S/C, C/C, O/C, PECOSA Y MEMORANDUM'],
                        ],
                    }
                },
                {
                    margin: [ 0, 4, 0, 4 ],
                    table: {
                        widths: [300,'*'],
                        body: [
                            [[
                                {
                                    table: {
                                        body: [
                                            [{text:'CODIFICACION PROGRAMATICA', colSpan: 7, alignment: 'center'}, '', '', '','','',''],
                                            [
                                                {text:'Rector',fontSize: 8,alignment: 'center'}, 
                                                {text:'Pliego',fontSize: 8,alignment: 'center'}, 
                                                {text:'Programa',fontSize: 8,alignment: 'center'}, 
                                                {text:'Sub programa',fontSize: 8,alignment: 'center'},
                                                ' ',
                                                {text:'fuente financiamiento',fontSize: 8,alignment: 'center'},
                                                {text:'funcional',fontSize: 8,alignment: 'center'},
                                            ],
                                            ['', '', '','','','RDR', ''],
                                        ]
                                    },
                                    layout: {
                                        hLineWidth: function (i, node) {
                                            return 0.5;
                                        },
                                        vLineWidth: function (i, node) {
                                            return 0.5;
                                        },
                                    },
                                }
                            ], [
                                {
                                    text: 'ESTADISTICA OBJETO DE GASTO', 
                                    alignment: 'center',
                                    margin: [ 0, 4, 0, 4 ],  
                                },
                                {
                                    margin: [ 0, 4, 0, 4 ],  
                                    table: {
                                        widths: ['*','*','*'],
                                        body: [
                                            [{ rowSpan: 2, text:'Codigo de partida' }, {text: 'IMPORTE', colSpan: 2}, ''],
                                            ['', 'PARCIAL', 'TOTAL'],
                                            ['2.3.1.5.1.2', 'S/. 3.062.00', 'S/. 3.062.00'],
                                            [' ', ' ', ' '],
                                            [' ', ' ', ' '],
                                            [' ', ' ', ' '],
                                            [' ', ' ', ' '],
                                            [' ', ' ', ' '],
                                            [{text: 'TOTAL', colSpan: 2}, ' ', 'S/.3.062.00'],
                                            [{text: 'DEDUCCIONES', colSpan: 2}, ' ', ' '],
                                            [{text: 'LIQUIDO A PAGAR', colSpan: 2}, ' ', 'S/.3.062.00'],
                                        ]
                                    },
                                    layout: {
                                        hLineWidth: function (i, node) {
                                            return 0.5;
                                        },
                                        vLineWidth: function (i, node) {
                                            return 0.5;
                                        },
                                    },
                                },
                                {
                                    margin: [ 0, 4, 0, 4 ],  
                                    table: {
                                        widths: ['*','*'],
                                        body: [
                                            ['DETENCIONES Y O DEDUCCIONES','IMPORTE'],
                                            [' ',' '],
                                            [' ',' '],
                                            [' ',' '],
                                            [' ',' '],
                                            [' ',' '],
                                            [' ',' '],
                                            [' ',' '],
                                            [' ',' '],
                                            ['FORMA DE PAGO','AUTORIZADO'],
                                            ['Cheque Nº: 75136178-3',''],
                                            ['Fondo para pagos en efectivo',''],
                                            ['Cta Cte Nº 00221007999',''],
                                        ]
                                    },
                                    layout: {
                                        hLineWidth: function (i, node) {
                                            return 0.5;
                                        },
                                        vLineWidth: function (i, node) {
                                            return 0.5;
                                        },
                                    },
                                }
                            ]],
                        ]
                    },
                    layout: 'noBorders',
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

export default paymentVoucher;