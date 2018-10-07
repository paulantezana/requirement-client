import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'dva';

class OrdenCompra extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { print, dispatch } = this.props;

        const onCancel = () => {
            dispatch({
                type: 'print/hidePrinterOC',
            });
        };

        return (
            <Modal
                title="Printer modal"
                onCancel={onCancel}
                style={{ top: 20 }}
                width="95vw"
                footer={null}
                bodyStyle={{ padding: 0 }}
                visible={print.ocVisible}
            >
                <iframe src={print.docOCDataUrl} height="600px" width="100%" />
            </Modal>
        );
    }
}

const mapStateToProps = ({ print }) => {
    return {
        print,
    };
};

export default connect(mapStateToProps)(OrdenCompra);
