import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from 'dva/router';
import { Icon }  from 'antd';

import logo from 'assets/logo.png';
import logoWhite from 'assets/logo-white.png';
import { app } from 'config/app';

import GlobalFooter from 'components/GlobalFooter';

import LoginPage from '../routes/User/Login';
import Forgot from '../routes/User/Forgot';
import styles from './UserLayout.scss';

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
        const { match } = this.props;
        return (
            <div className={styles.container}>
                {/* <img src={logo} className={styles.logo}/> */}
                <h1 className={styles.title}>{app.name}</h1>
                <Switch>
                    <Route exact path={`${match.url}/login`} component={LoginPage}/>
                    <Route exact path={`${match.url}/forgot`} component={Forgot}/>
                    <Redirect from="/user" to="/user/login" />
                </Switch>
                <GlobalFooter copyright={
                    <Fragment>
                        Copyright <Icon type="copyright" /> 2018 paulantezana.com
                    </Fragment>
                }/>
            </div>
        )
    }
}

export default UserLayout;