import React, { Component } from "react";
import { connect } from 'dva';
import { Tooltip as TooltipANTD, Icon } from 'antd';
import { Chart, Geom, Tooltip } from 'bizcharts';

import ChartCard from 'components/ChartCard';

import styles from './index.scss';

const tooltip = [
    'first_name*top',
    (x, y) => ({
        name: x,
        value: y,
    }),
];


class TopUsers extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({
            type: 'global/topUsers'
        })
    }
    render(){
        const { global: { topUsers } } = this.props;
        return (
            <ChartCard
                bordered={false}
                title="Usuarios cotizadores"
                action={
                    <TooltipANTD title="Top 15 usuarios que realizaron mas cotizaciones">
                        <Icon type="info-circle-o" />
                    </TooltipANTD>
                }
                total={topUsers.total}
                contentHeight={80}
                >
                <div className={styles.miniChart}>
                    <div className={styles.chartContent}>
                        <Chart forceFit height={92} data={topUsers.data}  padding={[0, 15, 30, 0]}>
                            <Tooltip showTitle={false} crosshairs={false} />
                            <Geom type="interval" position="first_name*top" tooltip={tooltip} color="#FF8441" />
                        </Chart>
                    </div>
                </div>
            </ChartCard>
        )
    }
}

const mapStateToProps = ({global}) => {
    return {
        global,
    }
}

export default connect(mapStateToProps)(TopUsers);