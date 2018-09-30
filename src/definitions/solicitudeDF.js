// ------------------------------------------------------------------------------
// SOLICITUD DE COTIZACION ----------------------------------------------------------
// ------------------------------------------------------------------------------
import { rowToCol } from '@/utils/utils';
import moment from 'moment';
import { docProperties } from '@/utils/config';

const solicitudeDF = async ({ response, setting, logoBase64 }) => {
    return new Promise((resoleve, reject) => {
        // Mapenando los tados de la tabla
        let requires = response.data.map(require => {
            return [
                { text: require.amount, alignment: 'center' },
                { text: require.unit_measure, alignment: 'center' },
                require.product_name,
                '',
                '',
            ];
        });

        requires.push([
            ' ',
            ' ',
            { text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', alignment: 'center' },
            ' ',
            ' ',
        ]);

        const rows = requires.length;
        if (rows <= 13) {
            for (let i = rows; i < 13; i++) {
                requires.push([' ', ' ', ' ', ' ', ' ']);
            }
        }

        const currentDate = new Date();
        let currentDay = currentDate.getDay();
        let currentMounth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        if (currentDay < 10) currentDay = '0' + currentDay;
        if (currentMounth < 10) currentMounth = '0' + currentMounth;

        // Definiendo el documento
        const docDefinition = {
            defaultStyle: {
                font: 'calibri',
                fontSize: 11,
            },
            info: {
                title: 'SOLICITUD DE COTIZACION',
                author: docProperties.author,
                creator: docProperties.creator,
            },
            pageSize: docProperties.pageSize,
            pageMargins: [48, 115, 48, 48],
            header: [
                { image: logoBase64, width: 50, margin: [48, 35, 0, 4] },
                {
                    text: setting.company_name.toUpperCase(),
                    alignment: 'center',
                    bold: true,
                    fontSize: 11,
                    margin: [48, -50, 48, 2],
                },
                {
                    text: `"${setting.city.toUpperCase()}"`,
                    alignment: 'center',
                    bold: true,
                    fontSize: 16,
                    margin: [48, 2, 48, 2],
                },
                {
                    text: 'SOLICITUD DE COTIZACION',
                    alignment: 'center',
                    bold: true,
                    fontSize: 13,
                    margin: [48, 4, 48, 0],
                },
                {
                    text:
                        '___________________________________________________________________________________________',
                    alignment: 'center',
                    margin: [48, -4, 48, 4],
                },
            ],

            content: [
                {
                    text: 'N°.....................................................',
                    alignment: 'right',
                    margin: [0, 2, 0, 8],
                },
                {
                    layout: {
                        hLineWidth: function(i, node) {
                            return 0.5;
                        },
                        vLineWidth: function(i, node) {
                            return 0.5;
                        },
                    },
                    table: {
                        widths: [30, 30, 30, 30],
                        body: [
                            ['N°', 'DIAS', 'MES', 'AÑO'],
                            ['', currentDay, currentMounth, currentYear],
                        ],
                    },
                    margin: [345, 2, 0, 8],
                },
                {
                    text: `REFERENCIA :..............................................................................................................................................`,
                    fontSize: 12,
                    margin: [0, 2, 0, 2],
                },
                {
                    text: `SEÑOR(ES)    :...............................................................................Telefono: ................................................ `,
                    fontSize: 12,
                    margin: [0, 2, 0, 2],
                },
                {
                    text: `DIRECCIÓN   :..............................................................................RUC: ........................................................`,
                    fontSize: 12,
                    margin: [0, 2, 0, 3],
                },
                {
                    text:
                        'Sirva(n)se cotizarnos precios netos de los artículos que se detallan más abajo, para ser entregados en nuestro almacén del ' +
                        setting.company_name,
                    margin: [0, 2, 0, 8],
                },
                {
                    table: {
                        widths: [45, 55, '*', 55, 55],
                        headerRows: 2,
                        body: [
                            [
                                { text: '1 \n ARTICULOS', style: 'tableHeader', colSpan: 3 },
                                {},
                                {},
                                { text: ' ', style: 'tableHeader', colSpan: 2 },
                                {},
                            ],
                            [
                                { text: 'a \n \n CANTIDAD', style: 'tableHeader' },
                                { text: 'b \n UNIDAD DE MEDIDA', style: 'tableHeader' },
                                { text: 'c \n \n DESCRIPCION', style: 'tableHeader' },
                                { text: 'a \n PRECIO UNIDARIO', style: 'tableHeader' },
                                { text: 'b \n \n TOTAL', style: 'tableHeader' },
                            ],
                            ...requires,
                        ],
                    },
                    layout: {
                        hLineWidth: function(i, node) {
                            return 0.5;
                        },
                        vLineWidth: function(i, node) {
                            return 0.5;
                        },
                        fillColor: function(i, node) {
                            if (i < 2) return '#F1F1F1';
                            return null;
                        },
                    },
                },
                {
                    text:
                        'Si por cualquier otra causa no esta en condiciones de cotizar, sirvan(se) firmar y devolver este documento',
                    margin: [0, 2, 0, 8],
                },
                {
                    text:
                        'Si esta en condiciones de cotizar, sirvan (se) UD. (s) hacerlo firmar o devolver este documento “sobre cerrado”',
                    margin: [0, 2, 0, 24],
                },

                {
                    text:
                        'Plazo de entrega _____________________________             Fecha____________________________________',
                    margin: [0, 30, 0, 60],
                },
                {
                    text:
                        '1 ___________________________________                                 2 ___________________________________',
                },
                {
                    text:
                        '       Firma del director del abastecimiento                                               Firma y cello del proveedor',
                },
            ],
            footer: [
                {
                    text:
                        '_____________________________________________________________________________________',
                    alignment: 'center',
                    color: '#AAAAAA',
                },
                {
                    text: docProperties.author,
                    alignment: 'right',
                    fontSize: 8,
                    italics: true,
                    color: '#AAAAAA',
                    margin: [0, 0, 72, 0],
                },
            ],
            styles: {
                tableHeader: {
                    bold: true,
                    fontSize: 10,
                    alignment: 'center',
                },
            },
        };
        resoleve(docDefinition);
    });
};

export default solicitudeDF;
