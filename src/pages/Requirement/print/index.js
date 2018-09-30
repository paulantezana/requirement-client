import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';

class SolicitudCotizacion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { requirement, dispatch } = this.props;

        const onCancel = () => {
            dispatch({
                type: 'requirement/hidePrinterSC',
            });
        };

        return (
            <Modal
                title="Solicitud de cotización"
                onCancel={onCancel}
                style={{ top: 20 }}
                width="95vw"
                footer={null}
                bodyStyle={{ padding: 0 }}
                visible={requirement.scVisible}
            >
                <iframe src={requirement.docSCDataUrl} height="600px" width="100%" />
            </Modal>
        );
    }
}

const mapStateToProps = ({ requirement }) => {
    return {
        requirement,
    };
};

export default connect(mapStateToProps)(SolicitudCotizacion);
