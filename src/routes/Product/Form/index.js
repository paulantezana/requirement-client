import React, { Component } from 'react';
import { Select, Modal, Form, Input, Checkbox } from 'antd';
import styles from './index.scss';
import { connect } from 'dva';

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};

const Option = Select.Option;

const AddForm = Form.create()(
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
    
            }
        }
        render(){
            const { visible, onCancel, onOk, form, confirmLoading, data } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal 
                    title="Producto"
                    okText="Guardar"
                    confirmLoading={confirmLoading}
                    onCancel={onCancel}
                    onOk={onOk}
                    visible={visible}>
                    <Form layout="horizontal">
                        <Form.Item hasFeedback {...formItemLayout} label="Nombre">
                            {
                                getFieldDecorator('name', {
                                    initialValue: data.name,
                                    rules: [
                                        { required: true, message: '¡Por favor un nombre!' },
                                    ],
                                })(
                                    <Input placeholder="Nombre"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Descripción">
                            {
                                getFieldDecorator('description', {
                                    initialValue: data.description,
                                })(
                                    <Input.TextArea autosize placeholder="Descripción"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Tipo">
                            {
                                getFieldDecorator('type', {
                                    initialValue: data.type || 'producto',
                                })(
                                    <Select placeholder="Seleccionar">
                                        <Option value="producto">Producto</Option>
                                        <Option value="servicio">Servicio</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item  {...formItemLayout} label="Estado">
                            {
                                getFieldDecorator('state',{
                                    valuePropName: 'checked',
                                    initialValue: data.state,
                                })(
                                    <Checkbox/>
                                )
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
)

class ModalForm extends Component{
    constructor(props){
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleConfirm(modalType){
        const { dispatch, product: {currentItem} } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `product/${modalType}`,
                payload: {...values, id: currentItem.id},
            });
            form.resetFields();
        });
    }    

    handleCancel(){
        const form = this.formRef.props.form;
        form.resetFields();
    }

    render(){

        const { handleConfirm, handleCancel } = this;

        const { dispatch, product, loading } = this.props;

        // Recuperando stados y datos desde el modelo product
        const {
            currentItem,
            modalType,
            modalVisible
        } = product;

        const productModal = {
            data: modalType == 'create' ? { state: true } : currentItem,
            disabled: modalType == 'detail',
            type: modalType,
            visible: modalVisible,
            confirmLoading: loading,
            onOk(){
                handleConfirm(modalType);
            },
            onCancel(){
                dispatch({
                    type: 'product/resetProduct'
                });
                handleCancel();
            }
        };

        return (
            <AddForm
                {...productModal}
                wrappedComponentRef={(formRef) => this.formRef = formRef}/>
        )
    }
}

const mapStateToProps = ({product, loading}) => {
    return {
        product,
        loading: loading.effects['product/create'] || loading.effects['product/update'],
    }
}

export default connect(mapStateToProps)(ModalForm);