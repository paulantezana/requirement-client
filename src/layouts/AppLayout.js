import React, { Component, Fragment } from "react";
import { connect } from 'dva';
import { ContainerQuery }  from 'react-container-query';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { Layout, Icon } from 'antd';
import { Switch, routerRedux } from 'dva/router';

import { PrivateRoute } from 'utilities/authority';
import classNames from 'classnames';
import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'components/GlobalFooter';
import SiderMenu from 'components/SiderMenu';
import Preload from 'components/Preload';
import { getMenuData } from '../common/menu';
import RenderAuthorized from 'components/Authorized';


const { Header, Content, Footer } = Layout;

// Media queryes
const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
    },
    'screen-xxl': {
        minWidth: 1600,
    },
};

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

import logo from 'assets/logo.png';
import logoWhite from 'assets/logo-white.png';
import { app as appConfig, service } from 'config/app';
import Requirement from '../routes/Requirement';
import Product from '../routes/Product';
import Provider from '../routes/Provider';
import User from '../routes/User/Users';
import General from '../routes/Setting';
import Profile from '../routes/User/Profile';
import Dashboard from '../routes/Dashboard';

class AppLayout extends Component{
    constructor(props){
        super(props);
        this.state = {
            isMobile,
        }
        this.handleMenuCollapse = this.handleMenuCollapse.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    // Menu user profile click
    handleMenuClick({key}){
        const { dispatch } = this.props;
        switch (key) {
            case 'logout':
                dispatch({
                    type: 'user/logout'
                })
                break;
            case 'setting':
                dispatch(routerRedux.push('/setting/general'));
                break;
            case 'profile':
                dispatch(routerRedux.push('/setting/profile'));
                break;
            default:
                break;
        }
    }

    // Side menu hide or show
    handleMenuCollapse(collapsed){
        const { dispatch } = this.props;
        dispatch({
            type: 'global/changeLayoutCollapsed',
            payload: collapsed,
        });
    };

    componentDidMount(){
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
              isMobile: mobile,
              collapsed: true,
            });
        });

        const { dispatch } = this.props;
        dispatch({type: 'global/globalSetting'})
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    render(){
        const { global: { collapsed, success, user, setting }, match, location } = this.props;
        const { isMobile: mb } = this.state;

        // Usando el componente de atorizacion
        // Configure las autorizaciones en commons/menu.js
        const Authorized = RenderAuthorized(user.profile); // 

        const layout = success
            ? (
                <Layout>
                    <SiderMenu
                        logo={logoWhite}
                        Authorized={Authorized}
                        menuData={getMenuData()}
                        collapsed={collapsed}
                        location={location}
                        isMobile={mb}
                        appConfig={appConfig}
                        onCollapse={this.handleMenuCollapse}
                    />
                    <Layout>
                        <Header style={{ padding: 0}}>
                            <GlobalHeader
                                logo={logo}
                                setting={setting}
                                currentUser={user}
                                collapsed={collapsed}
                                isMobile={mb}
                                onMenuClick={this.handleMenuClick}
                                onCollapse={this.handleMenuCollapse}
                            />
                        </Header>
                        <Content style={{ height: '100%' }}>
                            <Switch>
                                <PrivateRoute exact path={match.url} component={Dashboard}/>
                                <PrivateRoute path={`${match.url}requirements`} component={Requirement}/>
                                <PrivateRoute exact path={`${match.url}products`} component={Product}/>
                                <PrivateRoute exact path={`${match.url}providers`} component={Provider}/>
                                <PrivateRoute exact path={`${match.url}users`} component={User}/>
                                <PrivateRoute exact path={`${match.url}setting/general`} component={General}/>
                                <PrivateRoute exact path={`${match.url}setting/profile`} component={Profile}/>
                            </Switch>
                        </Content>
                        <GlobalFooter
                            copyright={
                                <Fragment>
                                    Copyright <Icon type="copyright" /> 2018 paulantezana.com
                                </Fragment>
                            }
                            />
                    </Layout>
                </Layout>
            ) : (
                <Preload logo={logo}/>
            );
        return (
            <ContainerQuery query={query}>
                {params => <div className={classNames(params)}>{layout}</div>}
            </ContainerQuery>
        )
    }
}

const mapStateToProps = ({global}) => {
    return {
        global: global,
    }
}

export default connect(mapStateToProps)(AppLayout);