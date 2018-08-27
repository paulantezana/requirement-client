import React, { Component } from 'react';
import { Button, Modal, Form, Input, InputNumber, AutoComplete, Row, Col, Icon } from 'antd';
import { connect } from 'dva';

import NewProduct from 'routes/Product/Form';
import styles from './index.scss';

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};

const Option = AutoComplete.Option;

const CollectionRequire = Form.create()(
    class extends React.Component {
        constructor(props){
            super(props);
        }

        handleChangeSelectProduct(value, text){
            this.props.form.setFieldsValue({
                product_name: text,
                product_id: value,
            })

            // Llenando el campo unidad de medida segun el producto seleccionado
            const currentProduct = this.props.product.searchResult.find(item => item.id == value);
            this.props.form.setFieldsValue({
                unit_measure: currentProduct.unit_measure
            })
        }

        render() {
            const { visible, onCancel, onOk, form, data = {} } = this.props;
            const { getFieldDecorator } = form;


            // Recuperando estados y datos desde el modelo product
            const { dispatch, product, loading} = this.props;

            // Mostrar el modal para agregar el producto
            const showModalAddProduct = ()=> {
                dispatch({
                    type: 'product/showModal',
                    payload: { modalType: 'create' },
                });
            }

            // Logica de programacion para el buscado
            // Con autocompletado automatico
            const { searchResult } = product;
            const onSearchProduct = (value) => {
                dispatch({
                    type: 'product/search',
                    payload: { search: value },
                });
            }
            const onSearchSelect = (value, option)=> {
                this.handleChangeSelectProduct(value, option.props.children)
            }

            const renderSerachItem = searchResult.map(item => <Option key={item.id}>{item.name}</Option> )

            return (
                <Modal
                    visible={visible}
                    title="Requerimeinto producto"
                    okText="Guardar"
                    cancelText="Cerrar"
                    onCancel={onCancel}
                    onOk={onOk}
                    >
                    <Form layout="horizontal">
                        <Form.Item hasFeedback {...formItemLayout} label="Producto">
                            <div className={styles.search}>
                                <div className={styles.item}>
                                    {getFieldDecorator('product_name_aux', {
                                        initialValue: data.product_name,
                                        rules: [{ required: true, message: '¡Por favor elija un producto!' }],
                                    })(
                                        <AutoComplete
                                            dataSource={renderSerachItem}
                                            onSelect={onSearchSelect}
                                            onSearch={onSearchProduct}
                                            placeholder="Buscar producto"
                                        />
                                    )}
                                </div>
                                <div className={styles.more}>
                                    <Button icon="plus" onClick={()=>showModalAddProduct()}/>
                                    <NewProduct/>
                                </div>
                            </div>
                        </Form.Item>
                        <Form.Item className={styles.hidden}>
                            {
                                getFieldDecorator('product_id', {
                                    initialValue: data.product_id,
                                })(
                                    <InputNumber/>
                                )
                            }
                        </Form.Item>
                        <Form.Item className={styles.hidden}>
                            {
                                getFieldDecorator('product_name', {
                                    initialValue: data.product_name,
                                })(
                                    <Input/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Cantidad">
                            {
                                getFieldDecorator('amount', {
                                    initialValue: data.amount,
                                    rules: [
                                        { required: true, message: '¡Por favor ingrese una cantidad!' },
                                        { pattern: /^([0-9]*|\d*\.\d{1}?\d*)$/, message: '¡Ingrese un cantidad válido!' }
                                    ],
                                })(
                                    <InputNumber/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Unidad de medida">
                            {
                                getFieldDecorator('unit_measure', {
                                    initialValue: data.unit_measure,
                                    rules: [
                                        { required: true, message: '¡Por favor ingrese un destino!' },
                                    ],
                                })(
                                    <Input />
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Precio sugerido">
                            {
                                getFieldDecorator('suggested_price', {
                                    initialValue: data.suggested_price,
                                    rules: [
                                        { pattern: /^([0-9]*|\d*\.\d{1}?\d*)$/, message: '¡Ingrese un precio válido!' }
                                    ],
                                })(
                                    <InputNumber />
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Observación">
                            {
                                getFieldDecorator('observation', {
                                    initialValue: data.observation,
                                })(
                                    <Input.TextArea />
                                )
                            }
                        </Form.Item>
                    </Form>    
                </Modal>
            );
        }
    }
);

class CollectionsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // Eviar los datos del formulario al modelo requirement para su tratamiento
    handleConfirm(modalType){
        const { dispatch, require: { currentItem }, requirement } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            values = {...values, product_id: parseInt(values.product_id), product_name_aux: undefined}
            if(modalType == 'create'){
                dispatch({
                    type: 'require/addList',
                    payload: {...values, id: currentItem.id},
                });
            }else if(modalType == 'update'){
                // Actualizar el registro cuando el requerimiento esta en modo UPDATE
                // Mediante el product_id
                if(requirement.modalType === 'update'){
                    dispatch({
                        type: 'require/updateItemByID',
                        payload: {...values, id: currentItem.id},
                    });
                }
                // Actualizar el registro cuando el requerimiento esta en modo CREATE
                // Mediante el id
                if(requirement.modalType === 'create'){
                    dispatch({
                        type: 'require/updateItemByProductID',
                        payload: {...values, product_id: currentItem.product_id},
                    });
                }
                
                // Reset form
                dispatch({
                    type: 'require/resetRequire',
                });
            }
            form.resetFields();
        });
    }

    render() {
        const { product, require, dispatch } = this.props;

        // Recuperando los estado y datos desde el modelo require
        const {
            currentItem,
            modalType,
            modalVisible,
        } = require;

        // Props del Modal para crear un nuevo require
        // con todo los detalles
        const { handleConfirm } = this; // Pasar al evento on OK del formulario de nuevo requerimiento

        const requireModalProps = {
            data: modalType == 'create' ? {} : currentItem,
            type: modalType,
            visible: modalVisible,
            onOk(){
                handleConfirm(modalType);
            },
            onCancel(){
                dispatch({
                    type: 'require/resetRequire'
                });
            },
        };

        return (
            <div>
                <CollectionRequire
                wrappedComponentRef={(formRef) => this.formRef = formRef}
                {...requireModalProps}
                dispatch={dispatch}
                product={product}/>
            </div>
        );
    }
}


const mapStateToProps = ({ product, require, requirement, loading}) => {
    return {
        product,
        require,
        requirement,
        loading: loading.effects,
    }
}

export default connect(mapStateToProps)(CollectionsPage);