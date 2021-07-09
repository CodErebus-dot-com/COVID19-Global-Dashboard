import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'

import LandingPage from './components/LandingPage/LandingPage'
import GlobalDashboard from './components/GlobalDashboard/GlobalDashboard'

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/global_dashboard" component={GlobalDashboard} />
            </Switch>
        </Router>
    )
}

export default Routes
