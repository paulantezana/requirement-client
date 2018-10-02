import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Input, Modal, Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './index.less';
import List from './List';
import ModalForm from './Form';

import ViwerCC from './ViwerCC';
import ExportData from './export';
import Spacing from '@/components/Spacing';

const Search = Input.Search;

class Quotation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleExport: false,
        };
        this.onQueryAll = this.onQueryAll.bind(this);
        this.handleToggleExport = this.handleToggleExport.bind(this);
    }
    componentDidMount() {
        this.onQueryAll();
    }
    onQueryAll() {
        const { dispatch } = this.props;

        //Query all
        dispatch({
            type: 'quotation/all',
        });

        // Query comparative table
        dispatch({
            type: 'quotation/getComparativeTable',
        });
    }
    handleToggleExport(toggle) {
        this.setState({
            visibleExport: toggle,
        });
    }
    render() {
        const { dispatch, setting, quotation, loadingAll } = this.props;
        const {
            list,
            total,
            requirementItem,
            // currentItem,
            // modalVisible,
            // modalType,
        } = quotation;

        const quotationListProps = {
            requirementItem,
            total,
            dataSource: list,
            loadingAll: loadingAll,
            onUpdate(param) {
                dispatch({
                    type: 'quotation/update',
                    payload: param,
                });
            },
            onShowModalEdit(type, currentItem) {
                onShowModal(type, currentItem);
            },
            onWinner(record) {
                dispatch({
                    type: 'quotation/winner',
                    payload: record,
                });
            },
            onDelete(param) {
                dispatch({
                    type: 'quotation/delete',
                    payload: param,
                });
            },
        };

        const onShowModal = (modalType, currentItem = {}) => {
            dispatch({
                type: 'quotation/showModal',
                payload: { currentItem, modalType },
            });

            // Consultar los detalles del requerimiento para realizar una cotizacion
            if (modalType === 'create') {
                dispatch({
                    type: 'require/byRequirement',
                    payload: { requirement_id: quotation.requirementID },
                });

                // Consulta los detalles para actualizar una cotizacion
            } else {
                dispatch({
                    type: 'require/byQuotation',
                    payload: { id: currentItem.id },
                });
            }
        };

        const onRejected = () => {
            // al modelo requirement
            dispatch({
                type: 'requirement/rejected',
                payload: { requirement_id: requirementItem.id },
            });

            // Actualizar los datos del requerimeento actual
            dispatch({ type: 'quotation/requirement' });
        };

        // Logica para aplicar el estylo correcto a las tarjetas
        // Segun el estado del requerimeinto
        const stateAux = requirementItem.state;
        const stateCard =
            stateAux === '4'
                ? styles.close
                : stateAux === '3'
                    ? styles.accepted
                    : stateAux === '2'
                        ? styles.rejected
                        : stateAux === '1'
                            ? styles.process
                            : styles.check;

        // Enabled or disabled buttons
        const enabledButtonPlus = !(requirementItem.state === '1' || requirementItem.state === '0');
        const enabledButtonNull = !(
            requirementItem.state === '1' ||
            requirementItem.state === '0' ||
            requirementItem.state === '3'
        );

        return (
            <PageHeaderWrapper
                title="Cotizaciones"
                // content="Lista de productos"
            >
                <Card bordered={false} className={stateCard}>
                    <div className={styles.header}>
                        {/* Button para insertar una nueva cotizacion esta activo solo cuando el requeriemiento esta en proceso */}
                        <Button
                            icon="plus"
                            type="primary"
                            onClick={() => onShowModal('create')}
                            disabled={enabledButtonPlus}
                        >
                            Insertar cotizacion
                        </Button>
                        <Button
                            disabled={enabledButtonNull}
                            icon="close"
                            onClick={() => {
                                Modal.confirm({
                                    title: '¿Estás seguro de anular este requeriminto?',
                                    content: '',
                                    okText: 'SI',
                                    okType: 'danger',
                                    cancelText: 'NO',
                                    onOk() {
                                        onRejected();
                                    },
                                });
                            }}
                        >
                            Anular
                        </Button>
                        <Button icon="export" onClick={() => this.handleToggleExport(true)}>
                            Exportar
                        </Button>
                        <ExportData
                            visible={this.state.visibleExport}
                            onCancel={() => this.handleToggleExport(false)}
                        />
                        <Button icon="reload" onClick={() => this.onQueryAll()}>
                            Actualizar
                        </Button>
                        <ModalForm />
                    </div>
                    <List {...quotationListProps} />
                </Card>
                <Spacing size="large" />
                <ViwerCC stateCard={stateCard} />
            </PageHeaderWrapper>
        );
    }
}

const mapStateToProps = ({ quotation, global, loading }) => {
    return {
        quotation,
        setting: global.setting,
        loadingAll: loading.effects['quotation/all'],
    };
};

export default connect(mapStateToProps)(Quotation);
