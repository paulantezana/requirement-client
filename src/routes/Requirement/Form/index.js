import React, { Component } from 'react';
import { Row, Col, Modal, Form, Input, DatePicker, Button } from 'antd';
import styles from './index.scss';
import { connect } from 'dva';
import moment from 'moment';
import DataList from './List';
import FormAddProduct from './FormAddProduct';
import Spacing from 'components/Spacing';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const dateFormat = 'YYYY/MM/DD';

const AddForm = Form.create()(
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
            }
        }
        render(){
            const { visible, onCancel, onOk, form, type, confirmLoading, data } = this.props;
            const { getFieldDecorator } = form;
            
            const { require, requirement, dispatch, loadingRequire } = this.props;
            const { list } = require;

            // Obteniendo el tipo de modal del modelo requirement 
            // Para activar o desactivar los datos del formulario
            const disabledItems = requirement.modalType === 'detail';
            const disabledFooter = ()=>{
                if(!disabledItems){
                    return {};
                }else{
                    return {
                        footer: null
                    }
                }
            }

            const requirementListProps = {
                dataSource: list,
                loading: loadingRequire,
                disabled: disabledItems,
                onUpdate(param){
                    // dispatch({
                    //     type: 'require/update',
                    //     payload: param
                    // });
                },
                onDelete(record){
                    dispatch({
                        type: 'require/removeItem',
                        payload: { product_id: record.product_id },
                    });
                    // Si el requerimeinto esta en modo update enviar para eliminar en la base de datos
                    if(requirement.modalType === 'update'){
                        dispatch({
                            type: 'require/delete',
                            payload: { id: record.id },
                        });
                    }
                },
                onShowModalEdit(type, currentItem){
                    onShowModal(type, currentItem)
                }
            }

            // Dispatch para mostrar el modal de agrgar un nuevo requite (Producto requerimeinto)
            const onShowModal = (modalType, currentItem = {})=>{
                dispatch({
                    type: 'require/showModal',
                    payload: { currentItem, modalType },
                });
            }

            // Dispatch para limpiar la lista de lore requires
            const onClearAll = ()=>{
                dispatch({
                    type: 'require/clearList',
                });
            }

            return (
                <Modal 
                    title="Requerimiento"
                    okText="Guardar"
                    width="90vw"
                    style={{ top: 50 }}
                    confirmLoading={confirmLoading}
                    onCancel={onCancel}
                    onOk={onOk}
                    {...disabledFooter()}
                    visible={visible}>
                    <Form layout="horizontal">
                        <Row gutter={16}>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item hasFeedback {...formItemLayout} label="Nombre">
                                    {
                                        getFieldDecorator('name', {
                                            initialValue: data.name,
                                            rules: [
                                                { required: true, message: '¡Por favor ingrese un nombre!' },
                                            ],
                                        })(
                                            <Input placeholder="Nombre"/>
                                        )
                                    }
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item hasFeedback {...formItemLayout} label="Lugar">
                                    {
                                        getFieldDecorator('place', {
                                            initialValue: data.place || 'Sicuani',
                                        })(
                                            <Input placeholder="Lugar" disabled={disabledItems}/>
                                        )
                                    }
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item hasFeedback {...formItemLayout} label="Destino">
                                    {
                                        getFieldDecorator('destination', {
                                            initialValue: data.destination,
                                            rules: [
                                                { required: true, message: '¡Por favor ingrese un destino!' },
                                            ],
                                        })(
                                            <Input placeholder="Destino" disabled={disabledItems}/>
                                        )
                                    }
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={8}>
                                <Form.Item hasFeedback {...formItemLayout} label="Solicitante">
                                    {
                                        getFieldDecorator('claimant', {
                                            initialValue: data.claimant,
                                            rules: [
                                                { required: true, message: '¡Por favor ingrese un solicitante!' },
                                            ],
                                        })(
                                            <Input placeholder="Solicitante" disabled={disabledItems}/>
                                        )
                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div className={styles.operations}> 
                        <Button.Group>
                            <Button disabled={disabledItems} type="primary" icon="plus" onClick={()=>onShowModal('create')}>Agregar</Button>      
                            <Button disabled={disabledItems} type="danger" icon="delete" onClick={()=>onClearAll()} >Limpiar</Button>  
                        </Button.Group>  
                        <FormAddProduct/>
                    </div>
                    <Spacing/>
                    <DataList {...requirementListProps}/>
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

    // Eviar los datos del formulario al modelo requirement para su tratamiento
    handleConfirm(modalType){
        const { dispatch, requirement: {currentItem} } = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            dispatch({
                type: `requirement/${modalType}`,
                payload: {...values, id: currentItem.id},
            });
            
            form.resetFields();

            // Requesar el modelo requirement
            dispatch({
                type: 'requirement/resetRequirement'
            });

            // Limpiar la lista re los requires
            dispatch({
                type: 'require/clearList'
            });
        });
    }

    handleCancel(){
        const { dispatch } = this.props;
        const form = this.formRef.props.form;

        // Limpiar la lista re los requires
        dispatch({
            type: 'require/clearList'
        });

        // Reste form
        form.resetFields();
    }

    render(){
        const { dispatch, requirement, require, loading, loadingRequire } = this.props;
        
        // Recuperando los estado y datos desde el modelo requirement
        const {
            currentItem,
            modalType,
            modalVisible,
        } = requirement;
        
        // Props del Modal para crear un nuevo requerimiento
        // con todo los detalles
        const { handleConfirm, handleCancel } = this; // Pasar al eventos on OK y Cancel del formulario de nuevo requerimiento

        const requirementModal = {
            data: modalType == 'create' ? {} : currentItem,
            disabled: modalType == 'detail',
            type: modalType,
            visible: modalVisible,
            confirmLoading: loading,
            onOk(){
                handleConfirm(modalType); // Metodo de esta clase
            },
            onCancel(){
                dispatch({
                    type: 'requirement/resetRequirement'
                });
                handleCancel();
            }
        };

        return (
            <AddForm
                {...requirementModal}
                dispatch={dispatch}
                require={require}
                requirement={requirement}
                loadingRequire={loadingRequire}
                wrappedComponentRef={(formRef) => this.formRef = formRef}/>
        )
    }
}

const mapStateToProps = ({requirement, require, loading}) => {
    return {
        requirement,
        require,
        loadingRequire: loading.effects['require/byRequirement'],
        loading: loading.effects['requirement/create'] || loading.effects['requirement/update'],
    }
}

export default connect(mapStateToProps)(ModalForm);