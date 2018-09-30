import React from 'react';
import { Modal, Button, Upload, Icon, message, Alert, Divider } from 'antd';
import { connect } from 'dva';

const Dragger = Upload.Dragger;

class UploadModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
    }
    render() {
        const { provider, dispatch, loading } = this.props;
        const { modalUploadVisible } = provider;

        const onCancel = () => {
            dispatch({
                type: 'provider/toggleModalUpload',
                payload: false,
            });
        };

        const propsDragger = {
            name: 'filestidents',
            uploading: loading,
            accept:
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel', // Tipo
            showUploadList: false, // Deshavilitar soporte multiples archivos
            beforeUpload: file => {
                this.setState({ file });
                return false; // Deshavilitar la subida automatica
            },
        };

        const onSubmit = () => {
            dispatch({
                type: 'provider/uploadProviders',
                payload: {
                    file: this.state.file,
                },
            });
        };

        const onDownloadTemp = () => {
            dispatch({
                type: 'provider/downloadTemp',
            });
        };

        const onRemove = () => {
            this.setState({ file: null });
        };

        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={modalUploadVisible}
                    footer={null}
                    onCancel={onCancel}
                >
                    <p>
                        Importa la información de tus proveedores desde un archivo xlsx(Excel). El
                        archivo xlsx se puede formatear con: dni, nombre o razón social y otros
                        campos opcionales.
                    </p>
                    <p>
                        {' '}
                        <a onClick={() => onDownloadTemp()}>
                            {' '}
                            <Icon type="layout" /> Descarga la plantilla
                        </a>{' '}
                        y abre en Excel para ver el formato con todos los campos aceptados.
                    </p>

                    {this.state.file ? (
                        <div>
                            <Alert
                                message={this.state.file.name}
                                type="info"
                                closable
                                onClose={() => onRemove()}
                            />
                            <Divider dashed />
                            <Button
                                type="primary"
                                loading={loading}
                                icon="upload"
                                onClick={() => onSubmit()}
                            >
                                {' '}
                                Subir archivo
                            </Button>
                        </div>
                    ) : (
                        <Dragger {...propsDragger}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">
                                Haga clic o arrastre el archivo a esta área para cargar
                            </p>
                            <p className="ant-upload-hint">Soporte para subir un solo archivo </p>
                        </Dragger>
                    )}
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = ({ provider, global, loading }) => {
    return {
        provider,
        loading: loading.effects['provider/uploadProviders'],
    };
};

export default connect(mapStateToProps)(UploadModal);
