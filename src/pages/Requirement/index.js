import React, { Component } from 'react';
import Requirement from './requirement';
import Quotation from './Quotation';

import { Switch } from 'dva/router';
import { PrivateRoute } from 'utilities/authority';

class RequirementRouter extends Component {
    render() {
        const { match } = this.props;
        return (
            <Switch>
                <PrivateRoute exact path={match.url} component={Requirement} />
                <PrivateRoute
                    exact
                    path={`${match.url}/quote/:requirement_id`}
                    component={Quotation}
                />
            </Switch>
        );
    }
}

export default RequirementRouter;
