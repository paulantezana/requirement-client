import React, {Component} from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';

class CuadroComparativo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { quotation, dispatch } = this.props;

        const onCancel = () =>{
            dispatch({
                type: 'quotation/hidePrinterCC',
            });
        }

        return (
            <Modal
                title="Cuadro Comparativo"
                onCancel={onCancel}
                style={{ top: 20 }}
                width="95vw"
                footer={null}
                bodyStyle={{padding: 0}}
                visible={quotation.ccVisible}>
                    <iframe src={quotation.docCCDataUrl} height="600px" width="100%"></iframe>
            </Modal>
        )
    }
}

const mapStateToProps = ({quotation}) => {
    return {
        quotation,
    }
}

export default connect(mapStateToProps)(CuadroComparativo);
