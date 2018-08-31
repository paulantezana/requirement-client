import React, { Component } from "react";
import { connect } from 'dva';
import { Card, Divider } from 'antd';
import SettingForm from './Form';
import UploadLogo from './UploadLogo';

class Setting extends Component{
    render(){
        return (
            <Card bordered={false}>
                <SettingForm/>
                <Divider orientation="left">Logo</Divider>
                <UploadLogo/>
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