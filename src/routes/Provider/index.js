import React, { Component, Fragment } from "react";
import { connect } from "dva";
import { Button, Input, Icon, Divider, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ModalForm from './Form';
import UploadModal from './UploadModal';

const Search = Input.Search;

class Provider extends Component{
    constructor(props){
        super(props);
        this.onQueryAll = this.onQueryAll.bind(this);
    }
    componentDidMount(){
        this.onQueryAll();
    }
    onQueryAll(clear){
        const { dispatch, provider: { searchText } } = this.props;
        dispatch({
            type: 'provider/all',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    render(){
        const {dispatch, setting, provider, loading} = this.props;
        const { onQueryAll } = this;
        const {
            list,
            total,
            current,
            searchText,
            currentItem,
            // modalVisible,
            // modalType,
        } = provider;

        const providerListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loading: false,
            onPageChange(page){
                dispatch({
                    type:'provider/all',
                    payload:{
                        current_page: page,
                        search: searchText,
                    }
                });
            },
            onClear(){
                // Limpiar el valor del searchText
                dispatch({
                    type: 'provider/setSearchText',
                    payload: '',
                });
                // Query a todo los proveedores
                onQueryAll(true);
            },
            onUpdate(param){
                dispatch({
                    type: 'provider/update',
                    payload: param
                });
            },
            onShowModalEdit(type, currentItem){
                onShowModal(type, currentItem)
            },
            onDelete(param){
                dispatch({
                    type: 'provider/delete',
                    payload: param,
                });
            },
        }

        const onShowModal = (modalType, currentItem = {})=>{
            dispatch({
                type: 'provider/showModal',
                payload: { currentItem, modalType },
            });
        }

        // Set text search text
        const onSetSearchText = (search)=>{
            dispatch({
                type: 'provider/setSearchText',
                payload: search
            });
        }

        // Show modal upload
        const onShowModalUpload = ()=>{
            dispatch({
                type: 'provider/toggleModalUpload',
                payload: true,
            });
        }

        return (
            <Card 
                title={
                    <Fragment>
                        <Icon type="contacts" theme="outlined" />
                        <Divider type="vertical"/>
                        Proveedores
                    </Fragment>
                }
                bordered={false}>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo proveedor</Button>
                    <Button icon="upload" onClick={()=>onShowModalUpload()}>Importar</Button>
                    {/* <Button icon="export" onClick={()=>onShowModalExport()} >Exportar</Button> */}
                    <Button icon="reload" onClick={()=>this.onQueryAll()}>Actualizar</Button>
                    <Search placeholder="Buscar usuario" value={searchText} onChange={e=>onSetSearchText(e.target.value)} onSearch={value => this.onQueryAll()} style={{ width: 200 }}/>
                    <ModalForm/>
                    <UploadModal/>
                </div>
                <List {...providerListProps}/>
            </Card>
        )
    }
}

const mapStateToProps = ({provider, global, loading}) => {
    return {
        provider,
        setting: global.setting,
        loading: loading.effects,
    }
}

export default connect(mapStateToProps)(Provider);