import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';

class CuadroComparativo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { print, dispatch } = this.props;

        const onCancel = () => {
            dispatch({
                type: 'print/hidePrinterCC',
            });
        };

        return (
            <Modal
                title="Cuadro Comparativo"
                onCancel={onCancel}
                style={{ top: 20 }}
                width="95vw"
                footer={null}
                bodyStyle={{ padding: 0 }}
                visible={print.ccVisible}
            >
                <iframe src={print.docCCDataUrl} height="600px" width="100%" />
            </Modal>
        );
    }
}

const mapStateToProps = ({ print }) => {
    return {
        print,
    };
};

export default connect(mapStateToProps)(CuadroComparativo);
