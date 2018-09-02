import React, { Component } from "react";
import { connect } from "dva";
import { Card, Tooltip, Button } from 'antd';

import styles from './index.scss';

import CuadroComparativo from '../CC';
import OrdenCompra from '../OC';

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

        const onPrintCC = ()=> {
            // Mostrar el printer CC = cuadro comparativo
            dispatch({
                type: 'quotation/showPrinterCC',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'quotation/loadDataCC',
                // payload: record,
            });
        }

        const onPrintOC = ()=> {
            // Mostra el printer de OC = orden de compra
            dispatch({
                type: 'quotation/showPrinterOC',
            });

            // Cargar la definicion del documento
            dispatch({
                type: 'quotation/loadDataOC',
                // payload: record,
            });

            // Dar como finalizado el proceso del requerimeinto
            // dispatch({
            //     type: 'requirement/finished',
            //     payload: { requirement_id: requirementItem.id }
            // });

            // Actualizar los datos del requerimeento actual
            // dispatch({type: 'quotation/requirement'});
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
                    <Button icon="printer">Comprobante De Pago</Button>

                    {/* Imprimir memorandum */}
                    <Button icon="printer">Memorandum</Button>

                    {/* Imprimir pedido comprobante de salida */}
                    <Button icon="printer">Pecosa</Button>
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