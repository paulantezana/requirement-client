import React, {Component } from 'react';
import { Popconfirm, Tooltip, Icon } from 'antd';
import PropTypes from 'prop-types';
import StandardTable from 'components/StandardTable';
import styles from './index.scss';

class DataList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sortedInfo: null,
            filteredInfo: null,
        }
        this.onChange = this.onChange.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    onChange(pagination, filters, sorter) {
        this.setState({
            sortedInfo: sorter,
            filteredInfo: filters,
        });
    }

    clearAllFilters(){
        this.setState({
            sortedInfo: null,
            filteredInfo: null,
        })
        this.props.onClear();
    }

    render(){
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const {  onShowModalEdit, onDelete, dataSource, loading, disabled } = this.props;

        const columns = [
            {
                title: 'Cantidad',
                dataIndex: 'amount',
                key: 'amount',
                sorter: (a, b) => a.amount - b.amount,
                sortOrder: sortedInfo.columnKey === 'amount' && sortedInfo.order,
            },
            {
                title: 'Unidad de medida',
                dataIndex: 'unit_measure',
                key: 'unit_measure',
                sorter: (a, b) => a.unit_measure.length - b.unit_measure.length,
                sortOrder: sortedInfo.columnKey === 'unit_measure' && sortedInfo.order,
            },
            {
                title: 'Descripción',
                dataIndex: 'product_name',
                key: 'product_name',
            },
            {
                title: 'Precio sugerido',
                dataIndex: 'suggested_price',
                key: 'suggested_price',
            },
            {
                title: 'Total',
                key: 'total',
                render: (a, record)=>{
                    if(a.amount && a.suggested_price){
                        return a.amount * a.suggested_price;
                    }
                    return '';
                }
            },
            {
                title: 'Observación',
                dataIndex: 'observation',
                key: 'observation',
            },
            {
                title: 'Accion',
                key: 'accion',
                width: '110px',
                render: (a, record)=>{
                    return (
                        <div className={styles.actions}>
                            {
                                !disabled && 
                                <Tooltip title="Editar">
                                    <Icon type="edit" className={styles.update} onClick={()=>onShowModalEdit('update',a)}/>
                                </Tooltip>
                            }
                            {
                                !disabled &&
                                <Tooltip title="Eliminar">
                                    <Popconfirm title="¿Estás seguro de eliminar este registro?" onConfirm={() => onDelete(a)}>
                                        <Icon type="delete" className={styles.delete}/>
                                    </Popconfirm>
                                </Tooltip>
                            }
                        </div>
                    )
                }
            }
        ];
    
        return (
            <div>
                <StandardTable 
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                    pagination={false}
                    onChange={this.onChange}
                    minWidth={800}
                    rowKey={record=>record.product_id}/>
            </div>
        )
    }
}

DataList.propTypes = {
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onRefresh: PropTypes.func,
    dataSource: PropTypes.array,
    loading: PropTypes.any,
};

export default DataList;