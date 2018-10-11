// ------------------------------------------------------------------------------
// ORDEN DE COMPRA --------------------------------------------------------------
// ------------------------------------------------------------------------------

import { rowToCol } from '@/utils/utils';
import moment from 'moment';
import { docProperties } from '@/utils/config';

const purchaseOrder = async ({ response, setting, logoBase64 }) => {
    return new Promise((resoleve, reject) => {
        const purchaseOrder = response.data.purchase_order;
        const provider = response.data.provider;
        const requirement = response.data.requirement;
        console.log(setting, 'Setting');

        // ----------------------------------
        // Preparando los datos de la tabla principal de comparacion
        // ----------------------------------
        const coreTable = purchaseOrder.map((require, key) => [
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
        ]);
        const rows = coreTable.length;
        if (rows <= 13) {
            for (let i = rows; i < 13; i++) {
                coreTable.push([' ', ' ', ' ', ' ', ' ', ' ']);
            }
        }
        let total = 0;
        purchaseOrder.map(require => {
            total = require.total + total;
        });
        coreTable.push([' ', ' ', ' ', ' ', { text: 'TOTAL', alignment: 'center' }, total]);

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
                title: 'ORDEN DE COMPRA - GUIA DE INTERNAMIENTO',
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
                    text: 'ORDEN DE COMPRA - GUIA DE INTERNAMIENTO',
                    alignment: 'center',
                    fontSize: 16,
                    margin: [0, 4, 0, 4],
                },
            ],
            content: [
                {
                    table: {
                        widths: [60, 45, 45, '*', 45, 45],
                        headerRows: 3,
                        body: [
                            [
                                {
                                    columns: [
                                        [
                                            {
                                                text: `Señor(es)                 : ${
                                                    provider.manager
                                                }  RUCº: ${provider.ruc}`,
                                                margin: [0, 4, 0, 4],
                                            },
                                            {
                                                text: `Direccion                 : ${
                                                    provider.address
                                                }`,
                                                margin: [0, 4, 0, 4],
                                            },
                                            {
                                                text:
                                                    'Le agradecemos enviar a nuestro almacen en : ..',
                                                margin: [0, 4, 0, 4],
                                            },
                                            {
                                                text: `Los siguiente                : ${
                                                    requirement.name
                                                }`,
                                                margin: [0, 4, 0, 4],
                                            },
                                            {
                                                text: 'Referencia N°          : ..',
                                                margin: [0, 4, 0, 4],
                                            },
                                            {
                                                text: `Factura a nombre de          : ${
                                                    setting.company_name
                                                } RUCNº: ${setting.identification}`,
                                                margin: [0, 4, 0, 4],
                                            },
                                        ],
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
                                { text: 'C \n Unidad de medida', style: 'tableHeader' },
                                { text: 'D \n Descripcion', style: 'tableHeader' },
                                { text: 'A \n \n Unitario', style: 'tableHeader' },
                                { text: 'B \n \n Total', style: 'tableHeader' },
                            ],
                            ...coreTable,
                        ],
                    },
                },
                { text: ' ' },
                {
                    table: {
                        widths: [116, 116, 115, 115],
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
                                {
                                    table: {
                                        body: [
                                            [
                                                { text: 'Programa' },
                                                {
                                                    table: {
                                                        body: [['Nº']],
                                                    },
                                                },
                                            ],
                                            [
                                                { text: 'Sub Programa' },
                                                {
                                                    table: {
                                                        body: [
                                                            [{ text: '1', alignment: 'center' }],
                                                        ],
                                                    },
                                                },
                                            ],
                                        ],
                                    },
                                    layout: 'noBorders',
                                },
                                [{ text: 'CUENTA POR PAGAR' }, { text: total }],
                            ],
                            [
                                { text: 'Administracion' },
                                { text: 'Jefe de abastecimiento' },
                                {},
                                {},
                            ],
                            [
                                {
                                    columns: [
                                        {
                                            width: 40,
                                            text: 'NOTA: ',
                                            alignment: 'center',
                                        },
                                        {
                                            width: '*',
                                            text:
                                                'Esta orden es nula sin la firma mancomunada de abastecimiento el jefe de adquisiciones cada orden de compara se debe  facturar y (2) copias y remitirla a la dirección de la contabilidad. \n Nos reservamos el derecho de devolver de acuerdo con nuestras especificaciones.',
                                            margin: [0, 10, 0, 4],
                                        },
                                    ],
                                    colSpan: 2,
                                },
                                {},
                                {
                                    table: {
                                        body: [
                                            [{ text: 'RECIBI CONFORME' }],
                                            [
                                                {
                                                    table: {
                                                        widths: [30, 30, 30],
                                                        body: [
                                                            ['DIA', 'MES', 'AÑO'],
                                                            [
                                                                currentDay,
                                                                currentMounth,
                                                                currentYear,
                                                            ],
                                                        ],
                                                    },
                                                },
                                            ],
                                        ],
                                    },
                                    layout: 'noBorders',
                                },
                                {
                                    text: [
                                        {
                                            text: '\n\n\n\n\n __________________ \n',
                                            alignment: 'center',
                                        },
                                        { text: 'Jefe de almacen', alignment: 'center' },
                                    ],
                                },
                            ],
                        ],
                    },
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

export default purchaseOrder;
