// ------------------------------------------------------------------------------
// COMPROBANTE DE PAGO ----------------------------------------------------------
// ------------------------------------------------------------------------------
import { rowToCol } from '@/utils/utils';
import moment from 'moment';
import { docProperties } from '@/utils/config';

const paymentVoucher = async ({ response, setting, logoBase64 }) => {
    return new Promise((resoleve, reject) => {
        // ----------------------------------
        // Preparando los datos de la tabla principal de comparacion
        // ----------------------------------

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
            hLineWidth: function(i, node) {
                if (i === 0 || i === node.table.body.length) return 0;
                return i === node.table.headerRows ? 1 : 1;
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
            pageMargins: [48, 130, 48, 48],
            header: [
                {
                    margin: [48, 40, 0, 4],
                    columns: [
                        [
                            {
                                columns: [
                                    { image: logoBase64, width: 40 },
                                    [
                                        {
                                            text: setting.company_name,
                                            fontSize: 10,
                                            margin: [5, 0, 0, 3],
                                        },
                                        { text: setting.city, margin: [5, 0, 0, 5] },
                                    ],
                                ],
                            },
                        ],
                        {
                            table: {
                                widths: [30, 30, 30, 30],
                                body: [
                                    ['N°', 'DIAS', 'MES', 'AÑO'],
                                    ['', currentDay, currentMounth, currentYear],
                                ],
                            },
                            margin: [68.5, 2, 0, 8],
                            layout: {
                                hLineWidth: function(i, node) {
                                    return 0.5;
                                },
                                vLineWidth: function(i, node) {
                                    return 0.5;
                                },
                            },
                        },
                    ],
                },
                {
                    text: 'COMPROBANTE DE PAGO',
                    alignment: 'center',
                    fontSize: 16,
                    margin: [0, 4, 0, 4],
                },
            ],
            content: [
                {
                    margin: [0, 4, 0, 4],
                    table: {
                        widths: [50, '*', '*'],
                        headerRows: 0,
                        body: [
                            [
                                { text: 'NOMBRE :', bold: true },
                                { text: 'EDHUIN EBER ENRIQUEZ CORDOVA', colSpan: 2 },
                                '',
                            ],
                            [
                                { text: 'SON        :', bold: true },
                                {
                                    text: 'TRE MIL SESENTA Y UNO CON 00/100 NUEVOS SOLES',
                                    colSpan: 2,
                                },
                                '',
                            ],
                            ['', '6,062.00', '(En letras)'],
                        ],
                    },
                    layout: {
                        hLineWidth: function(i, node) {
                            return i === 2 ? 0 : 0.5;
                        },
                        vLineWidth: function(i, node) {
                            return i === 2 ? 0 : 0.5;
                        },
                    },
                },
                {
                    margin: [0, 4, 0, 4],
                    table: {
                        widths: ['*'],
                        headerRows: 0,
                        body: [
                            [
                                'IMPORTE QUE SE GIRA A LA ORDEN DE: EDHUIN EBER ENRÍQUEZ CÓRDOBA, PAGO POR LA ADQUISICIÓN DE MATERIALES DE ESCRITORIO PARA LA ATENCIÓN DE DIFERENTES OFICINAS JEFATURAS Y DOCENTES DEL I.E.S.T.P VILCANOTA – SICUANI, SEGÚN FACCTURA N.º 0001 – 000599 Y 000600, H/R, S/C, C/C, O/C, PECOSA Y MEMORANDUM',
                            ],
                        ],
                    },
                    layout: {
                        hLineWidth: function(i, node) {
                            return 0.5;
                        },
                        vLineWidth: function(i, node) {
                            return 0.5;
                        },
                    },
                },
                {
                    margin: [0, 4, 0, 4],
                    table: {
                        widths: [300, '*'],
                        body: [
                            [
                                [
                                    {
                                        margin: [0, 4, 0, 4],
                                        table: {
                                            // widths: ['*','*','*','*','*','*','*'],
                                            body: [
                                                [
                                                    {
                                                        text: 'CODIFICACION PROGRAMATICA',
                                                        colSpan: 7,
                                                        alignment: 'center',
                                                    },
                                                    '',
                                                    '',
                                                    '',
                                                    '',
                                                    '',
                                                    '',
                                                ],
                                                [
                                                    {
                                                        text: 'Rector',
                                                        fontSize: 9,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        text: 'Pliego',
                                                        fontSize: 9,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        text: 'Programa',
                                                        fontSize: 9,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        text: 'Sub programa',
                                                        fontSize: 9,
                                                        alignment: 'center',
                                                    },
                                                    ' ',
                                                    {
                                                        text: 'fuente financiamiento',
                                                        fontSize: 9,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        text: 'funcional',
                                                        fontSize: 9,
                                                        alignment: 'center',
                                                    },
                                                ],
                                                ['', '', '', '', '', 'RDR', ''],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                    {
                                        margin: [0, 8, 0, 0],
                                        text: 'CONTABILIDAD PRESUPUESTAL',
                                        alignment: 'center',
                                    },
                                    {
                                        margin: [0, 4, 0, 4],
                                        table: {
                                            widths: ['*', '*', '*', '*'],
                                            body: [
                                                [
                                                    {
                                                        text: 'DEBE',
                                                        colSpan: 2,
                                                        alignment: 'center',
                                                    },
                                                    '',
                                                    {
                                                        text: 'HABER',
                                                        colSpan: 2,
                                                        alignment: 'center',
                                                    },
                                                    '',
                                                ],
                                                ['CUENTA', 'IMPORTE', 'CUENTA', 'IMPORTE'],
                                                [
                                                    '84010201',
                                                    'S/. 3,062.00',
                                                    '86010201',
                                                    'S/. 3,062.00',
                                                ],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                    {
                                        margin: [0, 8, 0, 0],
                                        text: 'CONTABILIDAD PATRIMONIAL',
                                        alignment: 'center',
                                    },
                                    {
                                        margin: [0, 4, 0, 4],
                                        table: {
                                            widths: ['*', '*', '*', '*'],
                                            body: [
                                                [
                                                    {
                                                        text: 'DEBE',
                                                        colSpan: 2,
                                                        alignment: 'center',
                                                    },
                                                    '',
                                                    {
                                                        text: 'HABER',
                                                        colSpan: 2,
                                                        alignment: 'center',
                                                    },
                                                    '',
                                                ],
                                                ['CUENTA', 'IMPORTE', 'CUENTA', 'IMPORTE'],
                                                [
                                                    '84010201',
                                                    'S/. 3,062.00',
                                                    '86010201',
                                                    'S/. 3,062.00',
                                                ],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                    {
                                        margin: [0, 8, 0, 0],
                                        text: 'PARA USO DEL TESORO O CAJERO',
                                        alignment: 'center',
                                    },
                                    {
                                        margin: [0, 4, 0, 4],
                                        table: {
                                            widths: ['*', '*', '*'],
                                            heights: [10, 40],
                                            body: [
                                                ['FECHA', 'HECHO POR', 'CONFORME'],
                                                ['25/09/2017', 'B.Q.Q', '86010201'],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                    {
                                        margin: [0, 8, 0, 4],
                                        table: {
                                            widths: ['*', '*'],
                                            heights: [10, 35, 10],
                                            body: [
                                                [
                                                    {
                                                        text: 'VISACIÓN',
                                                        colSpan: 2,
                                                        alignment: 'center',
                                                    },
                                                    '',
                                                ],
                                                [' ', ' '],
                                                [
                                                    'Control Interno',
                                                    'Jefe de Unidad administrativa',
                                                ],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                    {
                                        margin: [0, 8, 0, 0],
                                        text: 'RECIBÍ CONFORME',
                                        alignment: 'center',
                                    },
                                    {
                                        margin: [0, 2, 0, 4],
                                        table: {
                                            widths: ['*', '*'],
                                            heights: [50, 10, 10, 10, 10],
                                            body: [
                                                [{ text: ' ', colSpan: 2 }, ' '],
                                                [
                                                    { text: 'FECHA', alignment: 'center' },
                                                    { text: 'FIRMA', alignment: 'center' },
                                                ],
                                                [' ', 'D.N.I.Nº:'],
                                                [' ', 'R.U.C.Nº:'],
                                                [' ', 'Libreta Militar Nº'],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                ],
                                [
                                    {
                                        margin: [0, 4, 0, 4],
                                        text: 'ESTADISTICA OBJETO DE GASTO',
                                        alignment: 'center',
                                    },
                                    {
                                        margin: [0, 4, 0, 4],
                                        table: {
                                            widths: ['*', '*', '*'],
                                            body: [
                                                [
                                                    { rowSpan: 2, text: 'Codigo de partida' },
                                                    { text: 'IMPORTE', colSpan: 2 },
                                                    '',
                                                ],
                                                ['', 'PARCIAL', 'TOTAL'],
                                                ['2.3.1.5.1.2', 'S/. 3.062.00', 'S/. 3.062.00'],
                                                [' ', ' ', ' '],
                                                [' ', ' ', ' '],
                                                [' ', ' ', ' '],
                                                [' ', ' ', ' '],
                                                [' ', ' ', ' '],
                                                [{ text: 'TOTAL', colSpan: 2 }, ' ', 'S/.3.062.00'],
                                                [{ text: 'DEDUCCIONES', colSpan: 2 }, ' ', ' '],
                                                [
                                                    { text: 'LIQUIDO A PAGAR', colSpan: 2 },
                                                    ' ',
                                                    'S/.3.062.00',
                                                ],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                    {
                                        margin: [0, 4, 0, 4],
                                        table: {
                                            widths: ['*', '*'],
                                            body: [
                                                ['DETENCIONES Y O DEDUCCIONES', 'IMPORTE'],
                                                [' ', ' '],
                                                [' ', ' '],
                                                [' ', ' '],
                                                [' ', ' '],
                                                [' ', ' '],
                                                [' ', ' '],
                                                [' ', ' '],
                                                [' ', ' '],
                                                ['FORMA DE PAGO', 'AUTORIZADO'],
                                                ['Cheque Nº: 75136178-3', ''],
                                                ['Fondo para pagos en efectivo', ''],
                                                ['Cta Cte Nº 00221007999', ''],
                                            ],
                                        },
                                        layout: {
                                            hLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                            vLineWidth: function(i, node) {
                                                return 0.5;
                                            },
                                        },
                                    },
                                ],
                            ],
                        ],
                    },
                    layout: 'noBorders',
                },
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
            },
        };

        resoleve(docDefinition);
    });
};

export default paymentVoucher;
