import React, {Component} from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'dva';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const docDefinition = { 
    header: 'simple text',
    content: [
        { text: 'Unordered list', style: 'header' },
        {
            ul: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        'Images can be also provided in dataURL format...',
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Column 1', 'Column 2', 'Column 3'],
                    [
                        {
                            stack: [
                                'Let\'s try an unordered list',
                                {
                                    ul: [
                                        'item 1',
                                        'item 2'
                                    ]
                                }
                            ]
                        },
                        [
                            'or a nested table',
                            {
                                table: {
                                    body: [
                                        ['Col1', 'Col2', 'Col3'],
                                        ['1', '2', '3'],
                                        ['1', '2', '3']
                                    ]
                                },
                            }
                        ],
                        {text: [
                            'Inlines can be ',
                            {text: 'styled\n', italics: true},
                            {text: 'easily as everywhere else', fontSize: 10}]
                        }
                    ]
                ]
            }
        },
    ],
    footer: {
        columns: [
            'Left part',
            { text: 'Right part', alignment: 'right' }
        ]
    },
    defaultStyle: {
        fontSize: 12,
    }
};

class OrdenCompra extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataUrl: null,
        }
    }

    componentDidMount(){
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getDataUrl((dataUrl)=>{
            this.setState({
                dataUrl
            })
        })
    }

    render(){
        const { quotation, dispatch } = this.props;

        const onCancel = () =>{
            dispatch({
                type: 'quotation/hidePrinterOC',
            });
        }

        return (
            <Modal
                title="Printer modal"
                onCancel={onCancel}
                style={{ top: 20 }}
                width="95vw"
                footer={null}
                bodyStyle={{padding: 0}}
                visible={quotation.ocVisible}>
                    <iframe src={this.state.dataUrl} height="600px" width="100%"></iframe>
            </Modal>
        )
    }
}

const mapStateToProps = ({quotation, global, loading}) => {
    return {
        quotation,
        setting: global.setting,
        loading: loading.effects,
    }
}

export default connect(mapStateToProps)(OrdenCompra);
