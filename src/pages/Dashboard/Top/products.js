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

class TopProducts extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'chart/topProducts',
        });
    }
    render() {
        const {
            chart: { topProducts },
        } = this.props;
        return (
            <ChartCard
                bordered={false}
                title="Productos mas requeridos"
                action={
                    <TooltipANTD title="Top 15 de los productos mas cotizados o requeridos">
                        <Icon type="info-circle-o" />
                    </TooltipANTD>
                }
                total={topProducts.total}
                contentHeight={80}
            >
                <div className={styles.miniChart}>
                    <div className={styles.chartContent}>
                        <Chart
                            forceFit
                            height={92}
                            data={topProducts.data}
                            padding={[0, 15, 30, 0]}
                        >
                            <Tooltip showTitle={false} crosshairs={false} />
                            <Geom type="interval" position="name*top" tooltip={tooltip} />
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

export default connect(mapStateToProps)(TopProducts);
