import React, {Component} from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'dva';

class Memorandum extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { print, dispatch } = this.props;

        const onCancel = () =>{
            dispatch({
                type: 'print/hidePrinterMemo',
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
                visible={print.memoVisible}>
                    <iframe src={print.docMemoDataUrl} height="600px" width="100%"></iframe>
            </Modal>
        )
    }
}

const mapStateToProps = ({print}) => {
    return {
        print,
    }
}

export default connect(mapStateToProps)(Memorandum);
