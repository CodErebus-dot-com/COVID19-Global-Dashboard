import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from '../../App'

const LandingPage = () => {
    return (
        <Router>
            <h1>Landing Page</h1>   
            <Link to="/home">Home</Link>
            <Link to="/global_dashboard">Global Dashboard</Link>

            <Switch>
                <Route path="/global_dashboard">
                    <App/>
                </Route>
            </Switch> 
        </Router>
    )
}

export default LandingPage

