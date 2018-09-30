import React, { Component } from 'react';
import { connect } from 'dva';
import { Tooltip as TooltipANTD, Icon } from 'antd';
import { Chart, Geom, Tooltip } from 'bizcharts';

import ChartCard from '@/components/Charts/ChartCard';

import styles from './index.less';

const tooltip = [
    'name*top',
    (x, y) => ({
        name: x,
        value: y,
    }),
];

class TopProviders extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'chart/topWinners',
        });
    }
    render() {
        const {
            chart: { topWinners },
        } = this.props;
        return (
            <ChartCard
                bordered={false}
                title="Proveedores cotizaciones ganadas"
                action={
                    <TooltipANTD title="Top 15 de los proveedores con mas cantidad de cotizaciones ganadas">
                        <Icon type="info-circle-o" />
                    </TooltipANTD>
                }
                total={topWinners.total}
                contentHeight={80}
            >
                <div className={styles.miniChart}>
                    <div className={styles.chartContent}>
                        <Chart forceFit height={92} data={topWinners.data} padding={[0, 15, 30, 0]}>
                            <Tooltip showTitle={false} crosshairs={false} />
                            <Geom
                                type="interval"
                                position="name*top"
                                tooltip={tooltip}
                                color="#EE3B61"
                            />
                        </Chart>
                    </div>
                </div>
            </ChartCard>
        );
    }
}

const mapStateToProps = ({ chart }) => {
    return {
        chart,
    };
};

export default connect(mapStateToProps)(TopProviders);
