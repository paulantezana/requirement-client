import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';

const { ConnectedRouter } = routerRedux;

import { PrivateRoute } from './utilities/authority';
//////////////////////////////////////////
import UserLayout from './layouts/UserLayout';
import AppLayout from './layouts/AppLayout';
import ExeptionLayout from './layouts/ExeptionLayout';
//////////////////////////////////////////

function RouterConfig({ history, app }) {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/user" component={UserLayout} />
                <Route path="/exception" component={ExeptionLayout} />
                <PrivateRoute path="/" component={AppLayout} />
            </Switch>
        </ConnectedRouter>
    );
}

export default RouterConfig;
