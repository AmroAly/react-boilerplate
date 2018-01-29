
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './../components/Header';
import DashboardPage from './../components/DashboardPage';
import NotFound from './../components/NotFound';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoutes exact path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
