import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

import styles from './index.scss';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: "user/login",
                    payload: values
                })
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const {user: {loading}} = this.props;
        return(
            <div>
                <Form onSubmit={this.handleSubmit} className={styles.form}>
                    <Form.Item hasFeedback>
                        {
                            getFieldDecorator('user_name', {
                                rules: [{ required: true, message: 'Por favor ingrese su nombre de usuario!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre de usuario o email" />
                            )
                        }
                    </Form.Item>
                    <Form.Item hasFeedback>
                        {
                            getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Por favor ingrese su contraseña!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña"/>
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        { getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(
                            <Checkbox>Recuérdame</Checkbox>
                        )}
                        <Link className={styles.forgot} to="/user/forgot">¿Olvidaste tu contraseña?</Link>
                        <Button type="primary" loading={loading} htmlType="submit" className={styles.submit}>Iniciar Sesión</Button>
                        O <Link to="/user/register">¡Regístrate ahora!</Link>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const LoginPage = Form.create()(LoginForm)

const mapStateToProps = ({user}) => {
    return {
        user,
    }
}

export default connect(mapStateToProps)(LoginPage);