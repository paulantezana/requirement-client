import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import Spacing from '@/components/Spacing';
import Workbook from 'react-excel-workbook';
import { connect } from 'dva';

const ExportVisible = ({ data }) => {
    return (
        <Workbook filename="cotizacion.xlsx" element={<Button type="primary">Cotizacion</Button>}>
            <Workbook.Sheet data={data} name="Cotizacion">
                <Workbook.Column label="Casting" value="winner" />
                <Workbook.Column label="Proveedor" value="provider_name" />
                <Workbook.Column label="Presupuesto" value="summation" />
                <Workbook.Column label="Cotizador Nombre" value="user_first_name" />
                <Workbook.Column label="Cotizador Apellidos" value="user_last_name" />
            </Workbook.Sheet>
        </Workbook>
    );
};

const DowloandAll = ({ dispatch }) => (
    <Button
        type="primary"
        onClick={() => {
            dispatch({
                type: 'dowloand/quotationAll',
            });
        }}
    >
        Todo Las Cotizaciones
    </Button>
);

class ExportData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataVisible: false,
            dataAll: false,
        };
        this.handleDataVisible = this.handleDataVisible.bind(this);
        this.handleDataAll = this.handleDataAll.bind(this);
    }
    handleDataVisible(e) {
        this.setState({
            dataVisible: e.target.checked,
        });
    }
    handleDataAll(e) {
        this.setState({
            dataAll: e.target.checked,
        });
    }
    render() {
        const { onCancel, visible, quotation, dispatch } = this.props;
        return (
            <Modal
                title="Exportar requerimientos"
                onCancel={onCancel}
                footer={null}
                visible={visible}
            >
                <ExportVisible data={quotation.list} />
                <Spacing />
                <DowloandAll dispatch={dispatch} />
            </Modal>
        );
    }
}

const mapStateToProps = ({ dowloand, quotation }) => {
    return {
        dowloand,
        quotation,
    };
};

export default connect(mapStateToProps)(ExportData);
