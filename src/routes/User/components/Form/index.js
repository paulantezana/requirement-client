import React, { Component } from 'react';
import { Select, Modal, Form, Input, Radio, Checkbox, Divider, Button } from 'antd';
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
            this.state = {}
            this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
            this.validateToNextPassword = this.validateToNextPassword.bind(this);
        }
        compareToFirstPassword(rule, value, callback){
            const form = this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('¡Las contraseñas no noinciden!');
            } else {
                callback();
            }
        }
        validateToNextPassword(rule, value, callback){
            const form = this.props.form;
            if (value && this.state.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        }
        render(){
            const { visible, onCancel, onOk, onResetPassword, form, type, confirmLoading, data } = this.props;
            const { getFieldDecorator } = form;
            const update = type !== 'update';

            return (
                <Modal 
                    title="Usuario"
                    okText="Guardar"
                    confirmLoading={confirmLoading}
                    onCancel={onCancel}
                    onOk={onOk}
                    visible={visible}>
                    <Form layout="horizontal">
                        <Form.Item hasFeedback {...formItemLayout} label="DNI">
                            {
                                getFieldDecorator('dni', {
                                    initialValue: data.dni,
                                    rules: [
                                        { required: true, message: '¡Por favor ingrese su DNI!' },
                                        { pattern: /^[0-9]{8}$/, message: '¡Ingrese un DNI válido!' }
                                    ],
                                })(
                                    <Input placeholder="DNI"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Nombres">
                            {
                                getFieldDecorator('first_name', {
                                    initialValue: data.first_name,
                                    rules: [
                                        { required: true, message: '¡Por favor ingrese su nombre!' },
                                        { pattern: /^[a-zA-Z áéíóúÁÉÍÓÚñÑ]{2,50}$/, message: '¡Ingrese un nombre válido!' }
                                    ],
                                })(
                                    <Input placeholder="Nombres"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Apellidos">
                            {
                                getFieldDecorator('last_name', {
                                    initialValue: data.last_name,
                                    rules: [
                                        { pattern: /^[a-zA-Z áéíóúÁÉÍÓÚñÑ]{2,50}$/, message: '¡Ingrese un apellido válido!' },
                                    ],
                                })(
                                    <Input placeholder="Apellidos"/>
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
                        <Form.Item {...formItemLayout} label="Sexo">
                            {
                                getFieldDecorator('gender', {
                                    initialValue: data.gender
                                })(
                                    <Radio.Group>
                                        <Radio value="0">Femenino</Radio>
                                        <Radio value="1">Masculino</Radio>
                                    </Radio.Group>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Perfil">
                            {
                                getFieldDecorator('profile', {
                                    initialValue: data.profile,
                                    rules: [
                                        { required: true, message: '¡Por favor elija un perfil!' }
                                    ],
                                })(
                                    <Select placeholder="Seleccionar">
                                        <Option value="user">Usuario</Option>
                                        <Option value="admin">Admin</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Nombre de usuario">
                            {
                                getFieldDecorator('user_name', {
                                    rules: [{ required: update, message: '¡Por favor ingrese su nombre de usuario!' }],
                                })(
                                    <Input placeholder="Nombre de usuario" />
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Contraseña" className={!update ? styles.hidden : styles.visible}>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        { required: update, message: 'Por favor ingrese su contraseña!' },
                                        { pattern: /^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ$@$!%*?&]{6,30}$/, message: '¡La contraseña debe contener entre 6 a 30 caracteres!' },
                                        { validator: this.validateToNextPassword}],
                                })(
                                    <Input type="password" placeholder="Contraseña"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Confirmar contraseña" className={!update ? styles.hidden : styles.visible}>
                            {
                                getFieldDecorator('confirm', {
                                    rules: [
                                        { required: update, message: '¡Por favor, confirme su contraseña!' },
                                        { validator: this.compareToFirstPassword}],
                                })(
                                    <Input type="password" placeholder="Confirmar Contraseña"/>
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
                    {
                        !update && 
                        <div className={styles.reset}>
                            <Divider/>
                            <Button type='danger' onClick={()=>{
                                Modal.confirm({
                                    title: "¿Estás seguro de resetear la contraseña del usuario?",
                                    content: data.user_name,
                                    okText: "SI",
                                    okType: 'danger',
                                    cancelText: "NO",
                                    onOk(){
                                        onResetPassword({id: data.id});
                                    }
                                })
                            }}>Reset password</Button>
                            <span>Al resetear la contraseña se establesera la contraseña por defecto que es DNI + usuario = nuevacontraseña</span>
                        </div>
                    }
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
        const { dispatch, user: {currentItem} } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `user/${modalType}`,
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

        const { dispatch, user, loading } = this.props;

        // Recuperando stados y datos desde el modelo product
        const {
            currentItem,
            modalType,
            modalVisible
        } = user;

        const userModalProps = {
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
                    type: 'user/resetUser'
                });
                handleCancel();
            },
            onResetPassword(payload){
                dispatch({
                    type: 'user/resetPassword',
                    payload,
                });
            }
        };

        return (
            <AddForm
                {...userModalProps}
                wrappedComponentRef={(formRef) => this.formRef = formRef}/>
        )
    }
}

const mapStateToProps = ({user, loading}) => {
    return {
        user,
        loading: loading.effects['user/create'] || loading.effects['user/update'],
    }
}

export default connect(mapStateToProps)(ModalForm);