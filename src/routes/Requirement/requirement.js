import React, { Component } from "react";
import { connect } from 'dva';
import { message, Button, Input, Tooltip, Pagination, Modal, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ExportData from './export';
import PrinterRequirement from './print';
import ModalForm from './Form';

const Search = Input.Search;

class Requirement extends Component{
    constructor(props){
        super(props);
        this.state = {
            visibleExport: false,
        }
        this.onQueryAll = this.onQueryAll.bind(this);
        this.handleToggleExport = this.handleToggleExport.bind(this);
    }
    componentDidMount(){
        this.onQueryAll();
    }
    onQueryAll(clear){
        const { dispatch, requirement: {searchText} } = this.props;
        dispatch({
            type: 'requirement/all',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    handleToggleExport(toggle){
        this.setState({
            visibleExport: toggle,
        })
    }
    render(){
        const { dispatch, setting, requirement, modelLoading } = this.props;
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
            loading: false,
            onPageChange(page){
                dispatch({
                    type:'requirement/all',
                    payload:{
                        current_page: page,
                        search: searchText,
                    }
                });
            },
            onDelete(param){
                dispatch({
                    type: 'requirement/delete',
                    payload: param,
                });
            },
            onClear(){
                dispatch({
                    type: 'requirement/setSearchText',
                    payload: '',
                });
                onQueryAll(true);
            },
            onUpdate(param){
                dispatch({
                    type: 'requirement/update',
                    payload: param
                });
            },
            onShowModalEdit(type, currentItem){
                dispatch({
                    type: 'require/byRequirement',
                    payload: { requirement_id: currentItem.id }
                });
                onShowModal(type, currentItem)
            },
            onShowPrinter(record){
                dispatch({
                    type: 'requirement/loadDataPrinter',
                    payload: record,
                });
                dispatch({
                    type: 'requirement/showPrinterSC',
                });
            },
        }

        const onShowModal = (modalType, currentItem = {})=>{
            dispatch({
                type: 'requirement/showModal',
                payload: { currentItem, modalType },
            });
            // Consultar los detalles del requerimiento e insertar en la tabla
            dispatch({
                type: 'require/all',
                payload: { requirement_id: currentItem.id },
            });
        }

        const onSearchText = (search)=>{
            dispatch({
                type: 'requirement/setSearchText',
                payload: search
            });
        }

        return (
            <Card bordered={false}>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo requerieminto</Button>
                    <Button icon="reload" onClick={()=>this.onQueryAll()}>Actualizar</Button>
                    <Button icon="export" onClick={()=>this.handleToggleExport(true)}>Exportar</Button>
                    <Search placeholder="Buscar requerimiento" value={searchText} onChange={e=>onSearchText(e.target.value)} onSearch={value => this.onQueryAll()} style={{ width: 200 }}/>
                    <ModalForm/>
                    <PrinterRequirement/>
                    <ExportData visible={this.state.visibleExport} onCancel={()=>this.handleToggleExport(false)}/>
                </div>
                <List {...requirementListProps}/>
            </Card>
        )
    }
}

const mapStateToProps = ({requirement, global, loading}) => {
    return {
        requirement,
        setting: global.setting,
        modelLoading: loading.models.requirement,
    }
}

export default connect(mapStateToProps)(Requirement);