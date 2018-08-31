import React, {Component} from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'dva';

class OrdenCompra extends Component{
    constructor(props){
        super(props);
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
                    <iframe src={quotation.docOCDataUrl} height="600px" width="100%"></iframe>
            </Modal>
        )
    }
}

const mapStateToProps = ({quotation}) => {
    return {
        quotation,
    }
}

export default connect(mapStateToProps)(OrdenCompra);
