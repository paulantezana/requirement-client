import React, { Component } from "react";
import { connect } from 'dva';
import { message, Button, Input, Tooltip, Pagination, Modal, Card } from 'antd';
import SettingForm from './SettingForm';

class Setting extends Component{
    render(){
        return (
            <Card bordered={false}>
                <SettingForm/>
            </Card>
        )
    }
}

const mapStateToProps = ({global}) => {
    return {
        global,
    }
}

export default connect(mapStateToProps)(Setting);