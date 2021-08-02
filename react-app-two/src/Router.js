import React from 'react';
import {} from 'react-router';
import {BrowserRouter as Router,Route,browserHistory,IndexRoute} from 'react-router';

import MainLayOut from './components/mainLayOut';

import HomePage from './components/HomePage';
import Users from './components/Users';
import Profile from './components/Profile';
import About from './components/About';

function Router(){
    <div className="router">
        <HomePage path="/home" componet/>
        <About/>
        <Profile/>
        <Users/>
    </div>
}

export default Router
