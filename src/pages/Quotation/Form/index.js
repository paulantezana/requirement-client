import React, { Component } from 'react';
import {
    Select,
    Modal,
    Form,
    Input,
    Checkbox,
    Button,
    AutoComplete,
    InputNumber,
    DatePicker,
    Row,
    Col,
} from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import moment from 'moment';

import ProviderForm from '../../Provider/ProviderForm';
import QuotationDetail from './QuotationDetail';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const Option = Select.Option;

const AddForm = Form.create()(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectProviderID: 0,
            };
        }

        // Cuando un item se selecciono en el buscador de tiempo real
        handleChangeSelectProvider(value) {
            this.setState({
                selectProviderID: value,
            });
        }

        render() {
            const { visible, onCancel, onOk, form, type, confirmLoading, data } = this.props;
            const { getFieldDecorator } = form;

            // BUSCADOR EN TIEMPO REAL
            // Recuperando estados y datos desde el modelo product
            const { dispatch, provider, loading } = this.props;

            // Mostrar el modal para agregar el producto
            const showModalAddProvider = () => {
                dispatch({
                    type: 'provider/showModal',
                    payload: { modalType: 'create' },
                });
            };

            // Logica de programacion para el buscado
            // Con autocompletado automatico
            const { searchResult } = provider;
            const onSearchProvider = value => {
                dispatch({
                    type: 'provider/search',
                    payload: { search: value },
                });
            };
            const onSearchSelect = (value, option) => {
                this.handleChangeSelectProvider(parseInt(value));
            };

            const renderSerachItem = searchResult.map(item => (
                <Option key={item.id}>{item.name}</Option>
            ));

            return (
                <Modal
                    title="Cotizacion"
                    okText="Guardar"
                    width="90vw"
                    style={{ top: 50 }}
                    confirmLoading={confirmLoading}
                    onCancel={onCancel}
                    onOk={onOk}
                    visible={visible}
                >
                    <Form layout="horizontal">
                        <Row gutter={16}>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item hasFeedback {...formItemLayout} label="Proveedor">
                                    <div className={styles.search}>
                                        <div className={styles.item}>
                                            {getFieldDecorator('provider_name_aux', {
                                                initialValue: data.provider_name,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '¡Por favor elija un proveedor!',
                                                    },
                                                ],
                                            })(
                                                <AutoComplete
                                                    dataSource={renderSerachItem}
                                                    onSelect={onSearchSelect}
                                                    onSearch={onSearchProvider}
                                                    placeholder="Buscar proveedor"
                                                />
                                            )}
                                        </div>
                                        <div className={styles.more}>
                                            <Button
                                                icon="plus"
                                                onClick={() => showModalAddProvider()}
                                            />
                                            <ProviderForm />
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item label="ID" className={styles.hidden}>
                                    {getFieldDecorator('provider_id', {
                                        initialValue:
                                            data.provider_id || this.state.selectProviderID,
                                    })(<InputNumber />)}
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item {...formItemLayout} label="Fecha entrega">
                                    {getFieldDecorator('deliver_date', {
                                        initialValue: data.deliver_date
                                            ? moment(new Date(data.deliver_date), 'DD/MM/YYYY')
                                            : undefined,
                                    })(<DatePicker format="DD/MM/YYYY" />)}
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item {...formItemLayout} hasFeedback label="Observación">
                                    {getFieldDecorator('observation', {
                                        initialValue: data.observation,
                                    })(<Input.TextArea autosize />)}
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item {...formItemLayout} label="Sugerir ganador">
                                    {getFieldDecorator('suggest_winner', {
                                        valuePropName: 'checked',
                                        initialValue: data.suggest_winner,
                                    })(<Checkbox />)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <QuotationDetail />
                </Modal>
            );
        }
    }
);

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm(modalType) {
        const {
            dispatch,
            quotation: { currentItem },
        } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            dispatch({
                type: `quotation/${modalType}`,
                payload: { ...values, id: currentItem.id },
            });

            // Vaciar campos del formulario
            form.resetFields();

            // Borar la lista de los requires
            dispatch({
                type: `require/clearList`,
            });
        });
    }

    render() {
        const { handleConfirm } = this;

        const { dispatch, quotation, provider, require, loading } = this.props;

        const { modalType, modalVisible, currentItem } = quotation;

        const quotationModal = {
            data: modalType == 'create' ? {} : require.currentQuotation,
            disabled: modalType == 'detail',
            type: modalType,
            visible: modalVisible,
            onOk() {
                handleConfirm(modalType);
            },
            onCancel() {
                dispatch({
                    type: 'quotation/resetQuotation',
                });
            },
        };

        return (
            <AddForm
                {...quotationModal}
                dispatch={dispatch}
                provider={provider}
                wrappedComponentRef={formRef => (this.formRef = formRef)}
            />
        );
    }
}

const mapStateToProps = ({ quotation, provider, require, loading }) => {
    return {
        quotation,
        provider,
        require,
        loading: loading.effects,
    };
};

export default connect(mapStateToProps)(ModalForm);
