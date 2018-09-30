import React, { Component, Fragment } from 'react';
import { Modal, Alert, Icon, Badge, Tag } from 'antd';
import PropTypes from 'prop-types';
import StandardTable from 'components/StandardTable';
import styles from './index.scss';

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
            onWinner,
            requirementItem,
            onShowModalEdit,
            onShowModalCTZ,
            onDelete,
            dataSource,
            loading,
            total,
        } = this.props;

        const columns = [
            {
                title: (
                    <div>
                        {' '}
                        ARTÍCULO
                        <Tag color="blue">1</Tag>
                    </div>
                ),
                children: [
                    {
                        title: (
                            <div>
                                N°
                                <Tag color="green">A</Tag>
                            </div>
                        ),
                        dataIndex: 'num',
                        key: 'num',
                        width: '70px',
                    },
                    {
                        title: (
                            <div>
                                Descripcion
                                <Tag color="green">B</Tag>
                            </div>
                        ),
                        dataIndex: 'name',
                        key: 'name',
                    },
                    {
                        title: (
                            <div>
                                Cantidad
                                <Tag color="green">C</Tag>
                            </div>
                        ),
                        dataIndex: 'amount',
                        key: 'amount',
                    },
                    {
                        title: (
                            <div>
                                Unidad de medida
                                <Tag color="green">D</Tag>
                            </div>
                        ),
                        dataIndex: 'unit_measure',
                        key: 'unit_measure',
                    },
                ],
            },
            {
                title: (
                    <div>
                        PRECIOS NETOS
                        <Tag color="blue">2</Tag>
                    </div>
                ),
                children: [
                    {
                        title: (
                            <div>
                                Unitario
                                <Tag color="cyan">A</Tag>
                            </div>
                        ),
                        dataIndex: 'price1',
                        key: 'price1',
                    },
                    {
                        title: (
                            <div>
                                Total <Tag color="cyan">B</Tag>
                            </div>
                        ),
                        key: 'total1',
                        render: (a, record) => {
                            if (a.price1) {
                                return `${a.price1 * a.amount}`;
                            }
                            return '';
                        },
                    },
                    {
                        title: (
                            <div>
                                Unitario
                                <Tag color="gold">A</Tag>
                            </div>
                        ),
                        dataIndex: 'price2',
                        key: 'price2',
                    },
                    {
                        title: (
                            <div>
                                Total <Tag color="gold">B</Tag>
                            </div>
                        ),
                        key: 'total2',
                        render: (a, record) => {
                            if (a.price2) {
                                return `${a.price2 * a.amount}`;
                            }
                            return '';
                        },
                    },
                    {
                        title: (
                            <div>
                                Unitario
                                <Tag color="red">A</Tag>
                            </div>
                        ),
                        dataIndex: 'price3',
                        key: 'price3',
                    },
                    {
                        title: (
                            <div>
                                Total <Tag color="red">B</Tag>
                            </div>
                        ),
                        key: 'total3',
                        render: (a, record) => {
                            if (a.price3) {
                                return `${a.price3 * a.amount}`;
                            }
                            return '';
                        },
                    },
                ],
            },
        ];

        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>CUADRO COMPARATIVO DE COTIZACIONES</h2>
                </div>
                <StandardTable
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                    pagination={false}
                    onChange={this.onChange}
                    minWidth={800}
                    // rowSelection={rowSelection}
                    rowKey={record => record.id}
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
