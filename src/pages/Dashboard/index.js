import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Button } from 'antd';
import Spacing from '@/components/Spacing';

import TopProducts from './Top/products';
import TopProviders from './Top/providers';
import TopUsers from './Top/users';
import TopRequirements from './Top/requirements';
import Compare from './Compare';

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
};

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col {...topColResponsiveProps}>
                        <TopProducts />
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <TopProviders />
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <TopRequirements />
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <TopUsers />
                    </Col>
                </Row>
                <Compare />
                <Spacing />
                <Row gutter={16}>
                    <Col xs={24} lg={12}>
                        <Card bordered={false} loading />
                    </Col>

                    <Col xs={24} lg={12}>
                        <Card bordered={false} loading />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = ({ chart }) => {
    return {
        chart,
    };
};

export default connect(mapStateToProps)(Dashboard);
