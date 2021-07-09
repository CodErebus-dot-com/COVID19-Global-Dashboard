import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import GlobalDashboard from '../GlobalDashboard/GlobalDashboard'

const LandingPage = () => {
    return (
        <Router>
            <h1>Landing Page</h1>   
            <Link to="/home">Home</Link>
            <Link to="/global_dashboard">Global Dashboard</Link>

            <Switch>
                <Route path="/global_dashboard">
                    <GlobalDashboard/>
                </Route>
            </Switch> 
        </Router>
    )
}

export default LandingPage
