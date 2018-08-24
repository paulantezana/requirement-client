import React, {Component, Fragment} from 'react';
import { Modal, Tooltip, Icon, Badge, Tag } from 'antd';
import PropTypes from 'prop-types';
import StandardTable from 'components/StandardTable';
import styles from './index.scss';


const WinnerLevel = ({total, level, state, onClick}) =>{
    let limit = 3; // Nuveles de ganadores
    let max = 3; // Numero maximo de primeros puestos por Nivel

    let space = (total < limit) ? Math.ceil(total / limit) : Math.floor(total / limit);
    space = space > max ? max : space; 

    if(level <= space || total === 1){
        return ( <Icon type="arrow-up" onClick={onClick} className={styles.onWinner1}/> )
    }
    if(level > space && level <= (space * 2)){
      return ( <Icon type="swap" onClick={onClick} className={styles.onWinner2}/> ) 
    }
    return ( <Icon type="arrow-down" className={styles.onWinner3}/> )
}

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
        
        const { onWinner, requirementItem, onShowModalEdit, onShowModalCTZ, onDelete, dataSource, loading, total } = this.props;
        
        const columns = [
            {
                title: 'Descripcion',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Cantidad',
                dataIndex: 'amount',
                key: 'amount',
            },
            {
                title: 'Unidad de medida',
                dataIndex: 'unit_measure',
                key: 'unit_measure',
            },
        ];
    
        return (
            <div>
                <div className={styles.table}>
                    {/* <div className={styles.tableAlert}>
                        <Alert
                            message={
                                <Fragment>
                                    <span>{`${total} Cotización`}</span>
                                    <a onClick={this.clearAllFilters} style={{ marginLeft: 24 }}> Borrar filtros y actualizar </a>
                                </Fragment>
                            }
                            type="info" showIcon/>
                    </div> */}
                    <StandardTable 
                        columns={columns}
                        dataSource={dataSource}
                        loading={loading}
                        pagination={false}
                        onChange={this.onChange}
                        minWidth={800}
                        // rowSelection={rowSelection}
                        rowKey={record=>record.id}/>
                </div>
            </div>
        )
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
    current: PropTypes.any
};

export default DataList;