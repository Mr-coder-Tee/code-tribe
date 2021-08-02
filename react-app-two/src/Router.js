import React from 'react';
import {} from 'react-router';
import {BrowserRouter as Router,Route,browserHistory,IndexRoute} from 'react-router';

import MainLayOut from './components/mainLayOut';

import HomePage from './components/HomePage';
import Users from './components/Users';
import Profile from './components/Profile';
import About from './components/About';

export default{
    <Router history={browserHistory}>
        <Route component={MainLayOut}>
            <Route path="/" component={HomePage}/>
            <Route path="/" component={Users}/>
            <Route path="/" component={Profile}/>
            <Route path="/" component={About}/>
        </Route>
    </Router>
};


