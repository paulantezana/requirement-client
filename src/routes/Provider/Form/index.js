import React, { Component } from 'react';
import { Select, Modal, Form, Input, Radio, Checkbox, Alert, Icon, InputNumber } from 'antd';
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
            const { visible, onCancel, onOk, form, type, confirmLoading, data, validRuc, dispatch } = this.props;
            const { getFieldDecorator } = form;

            return (
                <Modal 
                    title="Proveedor"
                    okText="Guardar"
                    confirmLoading={confirmLoading}
                    onCancel={onCancel}
                    onOk={onOk}
                    visible={visible}>
                    <Form layout="horizontal">
                        <Form.Item hasFeedback {...formItemLayout} label="RUC">
                            {
                                getFieldDecorator('ruc', {
                                    initialValue: data.ruc,
                                    rules: [
                                        { required: true, message: '¡Por favor ingrese un RUC!' },
                                        { pattern: /^[0-9]{11}$/, message: '¡Ingrese un RUC válido!' }
                                    ],
                                })(
                                    <Input placeholder="RUC"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Nombre o razón social">
                            {
                                getFieldDecorator('name', {
                                    initialValue: data.name,
                                    rules: [
                                        { required: true, message: '¡Por favor un Nombre o razón social!' },
                                    ],
                                })(
                                    <Input placeholder="Nombre o razón social"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Representante">
                            {
                                getFieldDecorator('manager', {
                                    initialValue: data.manager,
                                })(
                                    <Input placeholder="Representante"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Email">
                            {
                                getFieldDecorator('email', {
                                    initialValue: data.email,
                                    rules: [
                                        { type: 'email', message: '¡Ingrese un correo valido!' },
                                    ],
                                })(
                                    <Input placeholder="Email"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Telefono">
                            {
                                getFieldDecorator('phone', {
                                    initialValue: data.phone,
                                    rules: [
                                        { pattern: /^[0-9]{6,12}$/, message: '¡Ingrese un telefono válido!' },
                                    ],
                                })(
                                    <Input placeholder="Telefono"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Dirección">
                            {
                                getFieldDecorator('address', {
                                    initialValue: data.address,
                                })(
                                    <Input placeholder="Dirección"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Observación">
                            {
                                getFieldDecorator('observation', {
                                    initialValue: data.observation,
                                })(
                                    <Input.TextArea placeholder="Observación"/>
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
        const { dispatch, provider: {currentItem} } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `provider/${modalType}`,
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

        const { dispatch, provider, loading } = this.props;

        // Recuperando stados y datos desde el modelo provider
        const {
            currentItem,
            modalType,
            modalVisible,
            validRuc,
        } = provider;

        const providerModal = {
            validRuc,
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
                    type: 'provider/resetProvider'
                });
                handleCancel();
            }
        };

        return (
            <AddForm
                {...providerModal}
                dispatch={dispatch}
                wrappedComponentRef={(formRef) => this.formRef = formRef}/>
        )
    }
}

const mapStateToProps = ({provider, loading}) => {
    return {
        provider,
        loading: loading.effects['provider/create'] || loading.effects['provider/update'],
    }
}

export default connect(mapStateToProps)(ModalForm);