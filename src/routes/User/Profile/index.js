import React, { Component } from "react";
import { connect } from 'dva';
import { Tabs, Icon } from 'antd';
import { Card } from 'antd';

import ProfileForm from './data';
import PasswordForm from './password';
import Upload from './avatar';

class Profile extends Component{
    render(){
        return (
            <Card bordered={false}>
                <Tabs defaultActiveKey="1" tabPosition="left">
                    <Tabs.TabPane tab={<span><Icon type="user" />Avatar</span>} key="1">
                        <Upload/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="user" />Datos</span>} key="2">
                        <ProfileForm/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="safety" />Password</span>} key="3">
                        <PasswordForm/>
                    </Tabs.TabPane>
                </Tabs>
            </Card>
        )
    }
}

const mapStateToProps = ({global}) => {
    return {
        global,
    }
}

export default connect(mapStateToProps)(Profile);