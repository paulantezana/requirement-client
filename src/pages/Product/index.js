import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Input, Divider, Icon, Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './index.less';
import List from './List';
import ModalForm from './Form';

const Search = Input.Search;

class Product extends Component {
    constructor(props) {
        super(props);
        this.onQueryAll = this.onQueryAll.bind(this);
    }
    componentDidMount() {
        this.onQueryAll();
    }
    onQueryAll(clear) {
        const {
            dispatch,
            product: { searchText },
        } = this.props;
        dispatch({
            type: 'product/all',
            payload: {
                search: clear ? '' : searchText,
            },
        });
    }
    render() {
        const { dispatch, setting, product, loadingAll, loadingUpdate } = this.props;
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
            loadingAll: loadingAll,
            loadingUpdate: loadingUpdate,
            onPageChange(page) {
                dispatch({
                    type: 'product/all',
                    payload: {
                        current_page: page,
                        search: searchText,
                    },
                });
            },
            onClear() {
                // Limpiar el campo search text
                dispatch({
                    type: 'product/setSearchText',
                    payload: '',
                });
                // Query para mostrar todo los productos
                onQueryAll(true);
            },
            onUpdate(param) {
                dispatch({
                    type: 'product/update',
                    payload: param,
                });
            },
            onShowModalEdit(type, currentItem) {
                onShowModal(type, currentItem);
            },
            onDelete(param) {
                dispatch({
                    type: 'product/delete',
                    payload: param,
                });
            },
        };

        const onShowModal = (modalType, currentItem = {}) => {
            dispatch({
                type: 'product/showModal',
                payload: { currentItem, modalType },
            });
        };

        const onSearchText = search => {
            dispatch({
                type: 'product/setSearchText',
                payload: search,
            });
        };

        return (
            <PageHeaderWrapper
                title="Productos"
                // content="Lista de productos"
            >
                <Card bordered={false}>
                    <div className={styles.header}>
                        <Button icon="plus" type="primary" onClick={() => onShowModal('create')}>
                            Nuevo producto
                        </Button>
                        <Button icon="reload" onClick={() => this.onQueryAll()} />
                        <Search
                            placeholder="Buscar producto"
                            value={searchText}
                            onChange={e => onSearchText(e.target.value)}
                            onSearch={value => this.onQueryAll()}
                            style={{ width: 200 }}
                        />
                        <ModalForm />
                    </div>
                    <List {...productListProps} />
                </Card>
            </PageHeaderWrapper>
        );
    }
}

const mapStateToProps = ({ product, global, loading }) => {
    return {
        product,
        setting: global.setting,
        loadingAll: loading.effects['product/all'],
        loadingUpdate: loading.effects['product/update'],
    };
};

export default connect(mapStateToProps)(Product);
