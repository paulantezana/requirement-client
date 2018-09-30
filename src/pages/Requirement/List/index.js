import React, { Component, Fragment } from 'react';
import { Link } from 'dva/router';
import { Pagination, Modal, Tooltip, Icon, Alert, Badge } from 'antd';
import PropTypes from 'prop-types';
import StandardTable from 'components/StandardTable';
import styles from './index.less';
import moment from 'moment';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedInfo: null,
            filteredInfo: null,
        };
        this.onChange = this.onChange.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    onChange(pagination, filters, sorter) {
        this.setState({
            sortedInfo: sorter,
            filteredInfo: filters,
        });
    }

    clearAllFilters() {
        this.setState({
            sortedInfo: null,
            filteredInfo: null,
        });
        this.props.onClear();
    }

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const {
            onPageChange,
            onShowModalEdit,
            onShowPrinter,
            onDelete,
            dataSource,
            loadingAll,
            total,
            pageSize,
            current,
        } = this.props;

        const columns = [
            {
                title: 'Nombre',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Lugar',
                dataIndex: 'place',
                key: 'place',
            },
            {
                title: 'Destino',
                dataIndex: 'destination',
                key: 'destination',
            },
            {
                title: 'Solicitante',
                dataIndex: 'claimant',
                key: 'claimant',
            },
            {
                title: 'Fecha Emicion',
                key: 'emission_date',
                dataIndex: 'emission_date',
                render: (a, record) => (
                    <span>{moment(a.emission_date).format('DD MMMM YYYY')}</span>
                ),
            },
            {
                title: 'Estado',
                key: 'state',
                filters: [
                    { text: 'Revisar', value: '0' },
                    { text: 'Proceso', value: '1' },
                    { text: 'Rechazado', value: '2' },
                    { text: 'Aceptado', value: '3' },
                    { text: 'Expirado', value: '4' },
                    { text: 'Cerrado', value: '5' },
                ],
                filteredValue: filteredInfo.state || null,
                onFilter: (value, record) => record.state.includes(value),
                render: (a, record) => {
                    switch (a.state) {
                        case '0':
                            return (
                                <span className={styles.check}>
                                    <Badge status="warning" /> Revisar
                                </span>
                            );
                        case '1':
                            return (
                                <span className={styles.process}>
                                    <Badge status="processing" /> Proceso
                                </span>
                            );
                        case '2':
                            return (
                                <span className={styles.rejected}>
                                    <Badge status="error" /> Rechazado
                                </span>
                            );
                        case '3':
                            return (
                                <span className={styles.accepted}>
                                    <Badge status="success" /> Aprobado
                                </span>
                            );
                        case '4':
                            return (
                                <span className={styles.close}>
                                    <Badge status="default" /> Cerrado
                                </span>
                            );
                        default:
                            break;
                    }
                },
            },
            {
                title: 'Accion',
                key: 'accion',
                width: '140px',
                render: (a, record) => {
                    return (
                        <div className={styles.actions}>
                            {a.state === '0' && (
                                <Tooltip title="Editar">
                                    <Icon
                                        type="edit"
                                        className={styles.update}
                                        onClick={() => onShowModalEdit('update', a)}
                                    />
                                </Tooltip>
                            )}
                            {a.state !== '0' && (
                                <Tooltip title="Ver">
                                    <Icon
                                        type="eye-o"
                                        className={styles.update}
                                        onClick={() => onShowModalEdit('detail', a)}
                                    />
                                </Tooltip>
                            )}
                            <Tooltip title="Imprimir">
                                <Icon
                                    type="printer"
                                    className={styles.printer}
                                    onClick={() => onShowPrinter(a)}
                                />
                            </Tooltip>
                            <Tooltip title="Cotizar">
                                <Link to={`/requirements/quote/${a.id}`}>
                                    <Icon type="calculator" className={styles.quote} />
                                </Link>
                            </Tooltip>
                            <Tooltip title="Eliminar">
                                <Icon
                                    type="delete"
                                    className={styles.delete}
                                    onClick={() => {
                                        Modal.confirm({
                                            title: '¿Estás seguro de eliminar este registro?',
                                            content: a.name,
                                            okText: 'SI',
                                            okType: 'danger',
                                            cancelText: 'NO',
                                            onOk() {
                                                onDelete({ id: a.id });
                                            },
                                        });
                                    }}
                                />
                            </Tooltip>
                        </div>
                    );
                },
            },
        ];

        return (
            <div>
                <div className={styles.table}>
                    <div className={styles.tableAlert}>
                        <Alert
                            message={
                                <Fragment>
                                    <span>{`${total} Requerimientos`}</span>
                                    <a onClick={this.clearAllFilters} style={{ marginLeft: 24 }}>
                                        {' '}
                                        Borrar filtros y actualizar{' '}
                                    </a>
                                </Fragment>
                            }
                            type="info"
                            showIcon
                        />
                    </div>
                    <StandardTable
                        columns={columns}
                        dataSource={dataSource}
                        loading={loadingAll}
                        pagination={false}
                        onChange={this.onChange}
                        minWidth={800}
                        // rowSelection={rowSelection}
                        rowKey={record => record.id}
                    />
                </div>
                <Pagination
                    showQuickJumper
                    total={total}
                    pageSize={pageSize}
                    defaultCurrent={1}
                    current={current}
                    showTotal={total => `Total ${total} items`}
                    onChange={onPageChange}
                />
            </div>
        );
    }
}

DataList.propTypes = {
    onPageChange: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onRefresh: PropTypes.func,
    dataSource: PropTypes.array,
    loading: PropTypes.any,
    total: PropTypes.any,
    current: PropTypes.any,
};

export default DataList;
