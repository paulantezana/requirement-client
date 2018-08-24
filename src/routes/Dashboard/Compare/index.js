import React, { Component } from "react";
import { connect } from 'dva';
import { Card } from 'antd';
import { Chart, Geom, Tooltip, Axis } from 'bizcharts';

const data = [
    {
        x: "Enero",
        y: [76, 100]
    },
    {
        x: "Febrero",
        y: [56, 108]
    },
    {
        x: "Marso",
        y: [38, 129]
    },
    {
        x: "Abril",
        y: [58, 155]
    },
    {
        x: "Mayo",
        y: [45, 120]
    },
    {
        x: "Junio",
        y: [23, 99]
    },
    {
        x: "Julio",
        y: [18, 56]
    },
    {
        x: "Agosto",
        y: [18, 34]
    }
];

class Compare extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { global: { topProducts } } = this.props;
        return (
            <Card bordered={false}>
                <div>
                    <Chart height={400} data={data} forceFit>
                        <Axis name="x" />
                        <Axis name="y" />
                        <Tooltip />
                        <Geom type="line" position="x*y" />
                        <Geom type="point" position="x*y"
                            size={4}
                            shape={"circle"}
                            style={{
                                stroke: "#fff",
                                lineWidth: 1
                            }}/>
                    </Chart>
                </div>
            </Card>
        )
    }
}

const mapStateToProps = ({global}) => {
    return {
        global,
    }
}

export default connect(mapStateToProps)(Compare);