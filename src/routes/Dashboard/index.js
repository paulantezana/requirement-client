import React, { Component } from "react";
import { connect } from 'dva';
import { Row, Col, Card, Button } from 'antd';
import Spacing from 'components/Spacing';

////////////////////////////////////////////////
import TopProducts from './Top/products';
import TopProviders from './Top/providers';
import TopUsers from './Top/users';
import TopRequirements from './Top/requirements';
import Compare from './Compare';
////////////////////////////////////////////////

class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Row gutter={16}>

                    <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                        <TopProducts/>
                    </Col>

                    <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                        <TopProviders/>
                    </Col>

                    <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                        <TopRequirements/>
                    </Col>

                    <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                        <TopUsers/>
                    </Col>

                </Row>
                <Spacing/>
                    <Compare/>
                <Spacing/>
                <Row gutter={16}>

                    <Col xs={24} lg={12}>
                        <Card bordered={false} loading></Card>
                    </Col>

                    <Col xs={24} lg={12}>
                        <Card bordered={false} loading></Card>
                    </Col>

                </Row>
            </div>
        )
    }
}

const mapStateToProps = ({global}) => {
    return {
        global,
    }
}

export default connect(mapStateToProps)(Dashboard);