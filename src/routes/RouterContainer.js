import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Home from '../components/pages/home/Home'

export default function RouterContainer() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route 
                exact={true}
                path="/"
                component={() => <Redirect to="/home" />}
                />
            </Switch>
        </Router>
    )
}
