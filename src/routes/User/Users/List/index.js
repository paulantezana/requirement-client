import React, {Component, Fragment} from 'react';
import { Pagination, Modal, Tooltip, Switch, Avatar, Icon, Alert} from 'antd';
import PropTypes from 'prop-types';
import StandardTable from 'components/StandardTable';
import styles from './index.scss';
import { service } from 'config/app';

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
        const { onPageChange, onUpdate, onShowModalEdit, onDelete, dataSource, loading, total, pageSize, current, setting } = this.props;
        const columns = [
            {
                title: 'Foto',
                key: 'avatar',
                width: '57px',
                render: (a,record)=> a.avatar != "" ? (
                    <Avatar src={`${service.path}/${a.avatar}`} />
                ) : (
                    <Avatar src={`${service.path}/${setting.logo}`}/>
                )
            },
            {
                title: 'DNI',
                dataIndex: 'dni',
                key: 'dni',
            },
            {
                title: 'Nombres',
                dataIndex: 'first_name',
                key: 'first_name',
                sorter: (a, b) => a.first_name.length - b.first_name.length,
                sortOrder: sortedInfo.columnKey === 'first_name' && sortedInfo.order,
            },
            {
                title: 'Apellidos',
                dataIndex: 'last_name',
                key: 'last_name',
                sorter: (a, b) => a.last_name.length - b.last_name.length,
                sortOrder: sortedInfo.columnKey === 'last_name' && sortedInfo.order,
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: 'Perfil',
                dataIndex: 'profile',
                key: 'profile',
                filters: [
                    { text: 'Admin', value: 'admin' },
                    { text: 'Usuario', value: 'user' },
                ],
                filteredValue: filteredInfo.profile || null,
                onFilter: (value, record) => record.profile.includes(value),
            },
            {
                title: 'Accion',
                key: 'accion',
                width: '150px',
                render: (a, record)=>{
                    return (
                        <div className={styles.actions}>
                            <Tooltip title="Estado">
                                <Switch size="small" checked={a.state} onChange={checked=>onUpdate({id: a.id, state: checked})}/>
                            </Tooltip>
                            <Tooltip title="Editar">
                                <Icon type="edit" className={styles.update} onClick={()=>onShowModalEdit('update',a)}/>
                            </Tooltip>
                            <Tooltip title="Eliminar">
                                <Icon type="delete" className={styles.delete} onClick={()=>{
                                    Modal.confirm({
                                        title: "¿Estás seguro de eliminar este registro?",
                                        content: a.nombre,
                                        okText: "SI",
                                        okType: 'danger',
                                        cancelText: "NO",
                                        onOk(){
                                            onDelete({id: a.id});
                                        }
                                    })
                                }}/>
                            </Tooltip>
                        </div>
                    )
                }
            }
        ];
    
        return (
            <div>
                <div className={styles.table}>
                    <div className={styles.tableAlert}>
                        <Alert
                            message={
                                <Fragment>
                                    <span>{`${total} Usuarios`}</span>
                                    <a onClick={this.clearAllFilters} style={{ marginLeft: 24 }}> Borrar filtros y actualizar </a>
                                </Fragment>
                            }
                            type="info" showIcon/>
                    </div>
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
                <Pagination showQuickJumper total={total} pageSize={pageSize} defaultCurrent={1} current={current} showTotal={total => `Total ${total} items`} onChange={onPageChange}/>
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