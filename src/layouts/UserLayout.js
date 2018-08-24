import React, { Component } from "react";
import { Route, Switch } from 'dva/router';
import { Row, Col, } from 'antd';
import Particles from 'react-particles-js';

////////////////////////////////////////////
import logo from 'assets/logo.png';
import logoWhite from 'assets/logo-white.png';
import { app } from 'config/app';
////////////////////////////////////////////

////////////////////////////////////////////
import LoginPage from '../routes/User/Login';
import Forgout from '../routes/User/Forgout';
import Register from '../routes/User/Register';
import styles from './UserLayout.scss';
///////////////////////////////////////////


const options = {
    particles: {
        number: {
            value: 15 ,
        },
        size: {
            value: 40,
            random: true,
            anim: {
                enable: false,
                speed: 200,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
        },
        move: {
            speed: 10,
        }
    }
}

class UserLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {  match } = this.props;
        return (
            <Row className={styles.container}>
                <Col xs={24} md={12} className={styles.particle}>
                    <img src={logoWhite} className={styles.logoWhite}/>
                    <Particles params={options}/>
                </Col>
                <Col xs={24} md={12} className={styles.content}>
                    <img src={logo} className={styles.logo}/>
                    <h1 className={styles.title}>{app.name}</h1>
                    <Switch>
                        <Route exact path={`${match.url}/login`} component={LoginPage}/>
                        <Route exact path={`${match.url}/forgot`} component={Forgout}/>
                        <Route exact path={`${match.url}/register`} component={Register}/>
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default UserLayout;