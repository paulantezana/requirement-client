import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';

class Requerimiento extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { requirement, dispatch } = this.props;

        const onCancel = () => {
            dispatch({
                type: 'requirement/hidePrinterRQ',
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
                visible={requirement.rqVisible}
            >
                <iframe src={requirement.docRQDataUrl} height="600px" width="100%" />
            </Modal>
        );
    }
}

const mapStateToProps = ({ requirement }) => {
    return {
        requirement,
    };
};

export default connect(mapStateToProps)(Requerimiento);
