import React, {Component} from 'react';
import { Button, Modal } from 'antd';
import Spacing from 'components/Spacing';
import Workbook  from 'react-excel-workbook';
import { connect } from 'dva';

const ExportVisible = ({data})=>{
    return (
        <Workbook filename="requeriemiento.xlsx" element={<Button type="primary">Requerimientos</Button>}>
            <Workbook.Sheet data={data} name="SRequerimiento">
                <Workbook.Column label="Nombre" value="name"/>
                <Workbook.Column label="Lugar" value="place"/>
                <Workbook.Column label="Destino" value="destination"/>
                <Workbook.Column label="Fecha emición" value="emission_date"/>
                <Workbook.Column label="Estado" value="state"/>
            </Workbook.Sheet>
        </Workbook>
    )
}

const DowloandAll = ({dispatch})=>(
    <Button type="primary" onClick={()=>{
        dispatch({
            type: 'dowloand/requirementAll',
        });
    }}>Todo Los Requerimientos</Button>
)

class ExportData extends Component{
    constructor(props){
        super(props);
        this.state ={
            dataVisible: false,
            dataAll: false,
        }
        this.handleDataVisible = this.handleDataVisible.bind(this);
        this.handleDataAll = this.handleDataAll.bind(this);
    }
    handleDataVisible(e){
        this.setState({
            dataVisible: e.target.checked,
        })
    }
    handleDataAll(e){
        this.setState({
            dataAll: e.target.checked,
        })
    }
    render(){
        const { onCancel, visible, requirement, dispatch } = this.props;
        return (
            <Modal
                title="Exportar requerimientos"
                onCancel={onCancel}
                footer={null}
                visible={visible}>
                <ExportVisible data={requirement.list}/>
                <Spacing/>
                <DowloandAll dispatch={dispatch}/>
            </Modal>
        )
    }
}

const mapStateToProps = ({dowloand, requirement}) => {
    return {
        dowloand,
        requirement,
    }
}

export default connect(mapStateToProps)(ExportData);