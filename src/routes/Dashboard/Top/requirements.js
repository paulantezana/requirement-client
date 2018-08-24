import React, { Component } from "react";
import { connect } from 'dva';
import { Tooltip as TooltipANTD, Icon } from 'antd';
import { Chart, Geom, Tooltip, Label } from 'bizcharts';

import ChartCard from 'components/ChartCard';

import styles from './index.scss';

const tooltip = [
    'state*top',
    (x, y) => ({
        name: x,
        value: y,
    }),
];


class TopRequirements extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({
            type: 'global/topRequirememnts'
        })
    }
    render(){
        const { global: { topRequirememnts } } = this.props;
        return (
            <ChartCard
                bordered={false}
                title="Requerimiento por estado"
                action={
                    <TooltipANTD title="Cantidad de requerimeentos por estado">
                        <Icon type="info-circle-o" />
                    </TooltipANTD>
                }
                total={topRequirememnts.total}
                contentHeight={80}
                >
                <div className={styles.miniChart}>
                    <div className={styles.chartContent}>
                        <Chart forceFit height={92} data={topRequirememnts.data}  padding={[0, 15, 30, 0]}>
                            <Tooltip showTitle={false} crosshairs={false} />
                            <Geom type="interval" position="state*top" tooltip={tooltip} color="state" />
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

export default connect(mapStateToProps)(TopRequirements);