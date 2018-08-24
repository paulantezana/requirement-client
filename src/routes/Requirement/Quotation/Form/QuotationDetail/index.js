import React, {Component } from 'react';
import { Popconfirm, InputNumber, Badge, Form, Tooltip, Tag } from 'antd';
import Spacing from 'components/Spacing';
import StandardTable from 'components/StandardTable';
import styles from './index.scss';
import { connect } from 'dva';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    handleClickOutside(e){
        if (this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }

    save(){
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            handleSave({ ...record, ...values });
        });
    }

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                <EditableContext.Consumer>
                    {(form) => {
                    this.form = form;
                        return (
                            <Tooltip placement="left" title="Ingrese el precio de la cotización">
                                <div className={styles.editing}>
                                    <Form.Item style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            initialValue: record[dataIndex],
                                            rules: [
                                                { required: true, message: `${title} es requerido.` },
                                                { pattern: /^([0-9]*|\d*\.\d{1}?\d*)$/, message: `¡${title} inválido!.` },
                                            ],
                                        })(
                                            <InputNumber min={0} ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save}/>
                                        )}
                                    </Form.Item>
                                    <Badge status="processing"/>
                                </div>
                            </Tooltip>
                        );
                    }}
                </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}









class DataList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sortedInfo: null,
            filteredInfo: null,
        }
        this.onChange = this.onChange.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    onChange(pagination, filters, sorter) {
        this.setState({
            sortedInfo: sorter,
            filteredInfo: filters,
        });
    }

    clearAllFilters(){
        this.setState({
            sortedInfo: null,
            filteredInfo: null,
        })
        this.props.onClear();
    }

    render(){
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const { require, dispatch, loading, disabled } = this.props;

        let columns = [
            {
                title: 'Cantidad',
                dataIndex: 'amount',
                key: 'amount',
                sorter: (a, b) => a.amount - b.amount,
                sortOrder: sortedInfo.columnKey === 'amount' && sortedInfo.order,
            },
            {
                title: 'Unidad de medida',
                dataIndex: 'unit_measure',
                key: 'unit_measure',
                sorter: (a, b) => a.unit_measure.length - b.unit_measure.length,
                sortOrder: sortedInfo.columnKey === 'unit_measure' && sortedInfo.order,
            },
            {
                title: 'Descripción',
                dataIndex: 'product_name',
                key: 'product_name',
            },
            {
                title: 'PS',
                dataIndex: 'suggested_price',
                key: 'suggested_price',
            },
            {
                title: 'Precio unitario',
                dataIndex: 'unit_price',
                key: 'unit_price',
                editable: true,
            },
            {
                title: 'Total',
                key: 'total',
                render: (a, record)=>{
                    if(a.amount && a.unit_price){
                        return a.amount * a.unit_price;
                    }
                    return '';
                }
            },
            {
                title: 'Observación',
                dataIndex: 'observation',
                key: 'observation',
            },
        ];

        columns = columns.map( col => {
            if (!col.editable) return col;
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: handleSave,
                }),
            };
        });

        const handleSave = (payload) => {
            dispatch({
                type: 'require/updateItemByID',
                payload,
            });
        }

        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        let totalG = 0;
        require.list.map(a=>{
            if(a.amount && a.unit_price){
                let subtotal = a.amount * a.unit_price;
                totalG += subtotal;
            }
        })
    
        return (
            <div>
                <Spacing/>
                <StandardTable 
                    columns={columns}
                    dataSource={require.list}
                    // loading={loading}
                    components={components}
                    pagination={false}
                    onChange={this.onChange}
                    minWidth={800}
                    // rowSelection={rowSelection}
                    rowClassName={() => 'editable-row'}
                    rowKey={record=>record.id}/>
                <Spacing size="small"/>
                <Tag color="#108ee9">Total : {totalG}</Tag>
            </div>
        )
    }
}

const mapStateToProps = ({quotation, require, loading}) => {
    return {
        quotation,
        require,
        loading: loading,
    }
}

export default connect(mapStateToProps)(DataList);