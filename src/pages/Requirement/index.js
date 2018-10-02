import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Input, Card, Icon, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './index.less';
import List from './List';
import ExportData from './export';
import PrinterRequirement from './print';
import ModalForm from './Form';

import PrintModalRQ from './PrintModalRQ';

const Search = Input.Search;

class Requirement extends Component {
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
    onQueryAll(clear) {
        const {
            dispatch,
            requirement: { searchText },
        } = this.props;
        dispatch({
            type: 'requirement/all',
            payload: {
                search: clear ? '' : searchText,
            },
        });
    }
    handleToggleExport(toggle) {
        this.setState({
            visibleExport: toggle,
        });
    }
    render() {
        const { dispatch, setting, requirement, loadingAll } = this.props;
        const { onQueryAll } = this;
        const {
            list,
            total,
            current,
            searchText,
            // currentItem,
            // modalVisible,
            // modalType,
        } = requirement;

        const requirementListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loadingAll: loadingAll,
            onPageChange(page) {
                dispatch({
                    type: 'requirement/all',
                    payload: {
                        current_page: page,
                        search: searchText,
                    },
                });
            },
            onDelete(param) {
                dispatch({
                    type: 'requirement/delete',
                    payload: param,
                });
            },
            onClear() {
                dispatch({
                    type: 'requirement/setSearchText',
                    payload: '',
                });
                onQueryAll(true);
            },
            onUpdate(param) {
                dispatch({
                    type: 'requirement/update',
                    payload: param,
                });
            },
            onShowModalEdit(type, currentItem) {
                dispatch({
                    type: 'require/byRequirement',
                    payload: { requirement_id: currentItem.id },
                });
                onShowModal(type, currentItem);
            },
            onShowPrinter(record) {
                dispatch({
                    type: 'requirement/loadDataPrinter',
                    payload: record,
                });
                dispatch({
                    type: 'requirement/showPrinterSC',
                });
            },
        };

        const onShowModal = (modalType, currentItem = {}) => {
            dispatch({
                type: 'requirement/showModal',
                payload: { currentItem, modalType },
            });
            // Consultar los detalles del requerimiento e insertar en la tabla
            dispatch({
                type: 'require/all',
                payload: { requirement_id: currentItem.id },
            });
        };

        const onSearchText = search => {
            dispatch({
                type: 'requirement/setSearchText',
                payload: search,
            });
        };

        const onPrintRQ = () => {
            // Mostrar el printer CC = cuadro comparativo
            dispatch({
                type: 'requirement/showPrinterRQ',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'requirement/loadDataRQ',
                // payload: record,
            });
        };

        return (
            <PageHeaderWrapper
                title="Requerimientos"
                // content="Lista de productos"
            >
                <Card bordered={false}>
                    <div className={styles.header}>
                        <Button icon="plus" type="primary" onClick={() => onShowModal('create')}>
                            Nuevo requerieminto
                        </Button>
                        <ModalForm />

                        <Button icon="export" onClick={() => this.handleToggleExport(true)}>
                            Exportar
                        </Button>
                        <ExportData
                            visible={this.state.visibleExport}
                            onCancel={() => this.handleToggleExport(false)}
                        />

                        <Button icon="printer" onClick={() => onPrintRQ()}>
                            Imprimir plantilla
                        </Button>
                        <PrintModalRQ />

                        <Button icon="reload" onClick={() => this.onQueryAll()}>
                            Actualizar
                        </Button>
                        <Search
                            placeholder="Buscar requerimiento"
                            value={searchText}
                            onChange={e => onSearchText(e.target.value)}
                            onSearch={value => this.onQueryAll()}
                            style={{ width: 200 }}
                        />

                        <PrinterRequirement />
                    </div>
                    <List {...requirementListProps} />
                </Card>
            </PageHeaderWrapper>
        );
    }
}

const mapStateToProps = ({ requirement, global, loading }) => {
    return {
        requirement,
        setting: global.setting,
        loadingAll: loading.effects['requirement/all'],
    };
};

export default connect(mapStateToProps)(Requirement);
