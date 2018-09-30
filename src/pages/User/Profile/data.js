import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Radio } from 'antd';

const RadioGroup = Radio.Group;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 12 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
        md: {
            span: 16,
            offset: 6,
        },
    },
};

const ProfileForm = Form.create()(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: false,
            };
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit(e) {
            e.preventDefault();
            const { data, dispatch } = this.props;
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    dispatch({
                        type: 'global/updateProfile',
                        payload: { ...values, id: data.id },
                    });
                }
            });
        }
        render() {
            const { getFieldDecorator } = this.props.form;
            const { data, loading } = this.props;
            return (
                <Fragment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item hasFeedback {...formItemLayout} label="DNI">
                            {getFieldDecorator('dni', {
                                initialValue: data.dni,
                                rules: [
                                    { required: true, message: '¡Por favor ingrese su DNI!' },
                                    { pattern: /^[0-9]{8}$/, message: '¡Ingrese un DNI válido!' },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Email">
                            {getFieldDecorator('email', {
                                initialValue: data.email,
                                rules: [
                                    { type: 'email', message: '¡Ingrese un correo valido!' },
                                    { required: true, message: '¡Por favor ingrese su correo!' },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Nombre de usuario">
                            {getFieldDecorator('user_name', {
                                initialValue: data.user_name,
                                rules: [{ required: true, message: '¡Ingrese un nombre válido!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Nombres">
                            {getFieldDecorator('first_name', {
                                initialValue: data.first_name,
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item hasFeedback {...formItemLayout} label="Apellidos">
                            {getFieldDecorator('last_name', {
                                initialValue: data.last_name,
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Genero" {...formItemLayout}>
                            {getFieldDecorator('gender', {
                                initialValue: data.gender,
                            })(
                                <RadioGroup>
                                    <Radio value="0">Femenino</Radio>
                                    <Radio value="1">Masculino</Radio>
                                </RadioGroup>
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" loading={loading} htmlType="submit">
                                Guardar cambios
                            </Button>
                        </Form.Item>
                    </Form>
                </Fragment>
            );
        }
    }
);

const mapStateToProps = ({ global, loading }) => {
    return {
        data: global.user,
        loading: loading.effects['global/updateProfile'],
    };
};

export default connect(mapStateToProps)(ProfileForm);
