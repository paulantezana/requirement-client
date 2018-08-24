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
        const { onWinner, requirementItem, onShowModalEdit, onShowModalCTZ, onDelete, dataSource, loadingAll, total } = this.props;
        
        const columns = [
            {
                title: 'Casting',
                key: 'winner',
                width: '100px',
                render: (a, record)=>{
                    return a.winner ? (
                        <Tag color="#108ee9">Ganador</Tag>
                    ) : (
                        <WinnerLevel total={total} state={requirementItem.state} level={a.winner_level} onClick={()=>{
                            Modal.confirm({
                                title: `¿Estás seguro de establecer al proveedor ${a.provider_name} como el ganador de este requerimiento?`,
                                okText: "SI",
                                okType: 'danger',
                                cancelText: "NO",
                                onOk(){
                                    onWinner(a);
                                }
                            })
                        }}/>
                    )
                }
            },
            {
                title: 'Proveedor',
                dataIndex: 'provider_name',
                key: 'provider_name',
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Presupuesto',
                key: 'summation',
                render: (a, record)=>(
                    `S/ ${a.summation}`
                )
            },
            {
                title: 'Cotizador',
                key: 'user_id',
                render: (a, record)=>(
                    `${a.user_first_name} ${a.user_last_name}`
                )
            },
            {
                title: 'Accion',
                key: 'accion',
                width: '110px',
                render: (a, record)=>{
                    return (
                        <div className={styles.actions}>
                            {
                                requirementItem.state === "1" &&
                                <Tooltip title="Editar">
                                    <Icon type="edit" className={styles.update} onClick={()=>onShowModalEdit('update',a)}/>
                                </Tooltip>
                            }
                            {
                                requirementItem.state !== "1" &&
                                <Tooltip title="Ver">
                                    <Icon type="eye-o" className={styles.update} onClick={()=>onShowModalEdit('update',a)}/>
                                </Tooltip>
                            }
                            {
                                requirementItem.state === "1" &&
                                <Tooltip title="Eliminar">
                                    <Icon type="delete" className={styles.delete} onClick={()=>{
                                        Modal.confirm({
                                            title: "¿Estás seguro de eliminar este registro?",
                                            content: a.name,
                                            okText: "SI",
                                            okType: 'danger',
                                            cancelText: "NO",
                                            onOk(){
                                                onDelete({id: a.id});
                                            }
                                        })
                                    }}/>
                                </Tooltip>
                            }
                        </div>
                    )
                }
            }
        ];
    
        return (
            <div>
                <div className={styles.table}>
                    <StandardTable 
                        columns={columns}
                        dataSource={dataSource}
                        loading={loadingAll}
                        pagination={false}
                        onChange={this.onChange}
                        minWidth={800}
                        rowKey={record=>record.id}/>
                </div>
            </div>
        )
    }
}

export default DataList;