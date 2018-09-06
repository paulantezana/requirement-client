import React, { Component } from "react";
import { connect } from "dva";
import { Card, Tooltip, Button } from 'antd';

import styles from './index.scss';

import CuadroComparativo from 'routes/Requirement/Quotation/Print/CCModal';
import OrdenCompra from 'routes/Requirement/Quotation/Print/OCModal';

import CPModal from 'routes/Requirement/Quotation/Print/CPModal';
import MemoModal from 'routes/Requirement/Quotation/Print/MemoModal';
import PecosaModal from 'routes/Requirement/Quotation/Print/PecosaModal';

import ComparativeTable from './List';

class ViwerCC extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { stateCard, dispatch, setting, quotation, loading } = this.props;

        const { requirementItem } = quotation;

        const enabledButtonOC = !(requirementItem.state === "3");
        const enabledButtonCC = (requirementItem.state === "0");

        const onPrintCC = () => {
            // Mostrar el printer CC = cuadro comparativo
            dispatch({
                type: 'print/showPrinterCC',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'print/loadDataCC',
            });
        }

        const onPrintOC = () => {
            // Mostra el printer de OC = orden de compra
            dispatch({
                type: 'print/showPrinterOC',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'print/loadDataOC',
            });
        }

        const onPrintCP = () => {
            // Mostra el printer de CP = Comprobante de pago
            dispatch({
                type: 'print/showPrinterCP',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'print/loadDataCP',
            });
        }
        const onPrintMemo = () => {
            // Mostra el printer de Memo = Memorandum
            dispatch({
                type: 'print/showPrinterMemo',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'print/loadDataMemo',
            });
        }
        const onPrintPecosa = () => {
            // Mostra el printer de Pecosa
            dispatch({
                type: 'print/showPrinterPecosa',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'print/loadDataPecosa',
            });
        }

        const quotationCTProps = {
            requirementItem,
            total: 100,
            dataSource: quotation.comparativeTable,
            loading: false,
            onWinner(record){
                dispatch({
                    type: 'quotation/winner',
                    payload: record,
                });
            },
        }

        return (
            <Card bordered={false} className={stateCard}>
                <div className={styles.header}>

                    {/* Imprimir cuadro comparativo */}
                    <Button disabled={enabledButtonCC} icon="printer" onClick={()=>onPrintCC()}>Cuadro Comparativo</Button>
                    <CuadroComparativo/>

                    {/* Imprimir orden de compra */}
                    <Button disabled={enabledButtonOC} icon="printer" onClick={()=>onPrintOC()}>Orden De Compra</Button>
                    <OrdenCompra/>

                    {/* Imprimir Comprobante de pago */}
                    <Button icon="printer" onClick={()=>onPrintCP()}>Comprobante De Pago</Button>
                    <CPModal/>

                    {/* Imprimir memorandum */}
                    <Button icon="printer" onClick={()=>onPrintMemo()}>Memorandum</Button>
                    <MemoModal/>

                    {/* Imprimir pedido comprobante de salida */}
                    <Button icon="printer" onClick={()=>onPrintPecosa()}>Pecosa</Button>
                    <PecosaModal/>
                </div>
                <ComparativeTable { ...quotationCTProps }/>
            </Card>
        )
    }
}

const mapStateToProps = ({quotation, global, loading}) => {
    return {
        quotation,
        setting: global.setting,
        loading: loading.effects,
    }
}

export default connect(mapStateToProps)(ViwerCC);