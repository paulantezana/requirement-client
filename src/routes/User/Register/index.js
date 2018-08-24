import React,{Component} from "react";
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'dva';

import styles from './index.scss';

import { Link } from 'dva/router';

class RegisterPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: "user/register",
                    payload: values
                })
                this.props.form.resetFields();
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { user: {loading} } = this.props;
        // Only show error after a field is touched.
        return (
            <div className={styles.container}>
                <p>Es gratis y lo será siempre.</p>
                <Form onSubmit={this.handleSubmit} className={styles.form}>
                    <Form.Item hasFeedback>
                        {
                            getFieldDecorator('user_name', {
                                rules: [{ required: true, message: '¡Por favor ingrese su nombre de usuario!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre de usuario" />
                            )
                        }
                    </Form.Item>

                    <Form.Item hasFeedback>
                        {
                            getFieldDecorator('dni', {
                                rules: [
                                    { required: true, message: '¡Por favor ingrese su DNI!' },
                                    { pattern: /^[0-9]{8}$/, message: '¡Ingrese un DNI válido!' }
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="DNI" />
                            )
                        }
                    </Form.Item>

                    <Form.Item hasFeedback>
                        {
                            getFieldDecorator('email', {
                                rules: [
                                    { type: 'email', message: '¡Ingrese un correo valido!' },
                                    { required: true, message: '¡Por favor ingrese su correo!' }
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Correo" />
                            )
                        }
                    </Form.Item>

                    <Form.Item hasFeedback>
                        {
                            getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: 'Por favor ingrese su contraseña!' },
                                    { pattern: /^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ$@$!%*?&]{6,30}$/, message: '¡La contraseña debe contener entre 6 a 30 caracteres!' },
                                    { validator: this.validateToNextPassword}],
                            })(
                                <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Contraseña"/>
                            )
                        }
                    </Form.Item>
                    
                    <Form.Item hasFeedback>
                        {
                            getFieldDecorator('confirm', {
                                rules: [
                                    { required: true, message: '¡Por favor, confirme su contraseña!' },
                                    { validator: this.compareToFirstPassword}],
                            })(
                                <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Repetir Contraseña"/>
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" loading={loading} htmlType="submit" className={styles.submit}>Registrate</Button>
                    </Form.Item>
                </Form>
                <Link to="/user/login">Login</Link>
            </div>
        )
    }
}
 
const Register = Form.create()(RegisterPage)

const mapStateToProps = ({user}) => {
    return {
        user,
    }
}

export default connect(mapStateToProps)(Register);