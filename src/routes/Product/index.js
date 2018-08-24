import React, { Component } from "react";
import { connect } from "dva";
import { message, Button, Input, Tooltip, Pagination, Modal, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ModalForm from './Form';

const Search = Input.Search;

class Product extends Component{
    constructor(props){
        super(props);
        this.onQueryAll = this.onQueryAll.bind(this);
    }
    componentDidMount(){
        this.onQueryAll();
    }
    onQueryAll(clear){
        const { dispatch, product: {searchText} } = this.props;
        dispatch({
            type: 'product/all',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    render(){
        const {dispatch, setting, product, loading} = this.props;
        const { onQueryAll } = this;
        const {
            list,
            total,
            current,
            searchText,
            currentItem,
            // modalVisible,
            // modalType,
        } = product;

        const productListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loading: false,
            onPageChange(page){
                dispatch({
                    type:'product/all',
                    payload:{
                        current_page: page,
                        search: searchText,
                    }
                });
            },
            onClear(){
                // Limpiar el campo search text
                dispatch({
                    type: 'product/setSearchText',
                    payload: '',
                });
                // Query para mostrar todo los productos
                onQueryAll(true);
            },
            onUpdate(param){
                dispatch({
                    type: 'product/update',
                    payload: param
                });
            },
            onShowModalEdit(type, currentItem){
                onShowModal(type, currentItem)
            },
            onDelete(param){
                dispatch({
                    type: 'product/delete',
                    payload: param,
                });
            },
        }

        const onShowModal = (modalType, currentItem = {})=>{
            dispatch({
                type: 'product/showModal',
                payload: { currentItem, modalType },
            });
        }

        const onSearchText = (search)=>{
            dispatch({
                type: 'product/setSearchText',
                payload: search
            });
        }

        return (
            <Card bordered={false}>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo producto</Button>
                    <Button icon="reload" onClick={()=>this.onQueryAll()}>Actualizar</Button>
                    <Search placeholder="Buscar producto" value={searchText} onChange={e=>onSearchText(e.target.value)} onSearch={value => this.onQueryAll()} style={{ width: 200 }}/>
                    <ModalForm/>
                </div>
                <List {...productListProps}/>
            </Card>
        )
    }
}

const mapStateToProps = ({product, global, loading}) => {
    return {
        product,
        setting: global.setting,
        loading: loading.effects,
    }
}

export default connect(mapStateToProps)(Product);