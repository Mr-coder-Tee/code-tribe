import React, { Component } from 'react';
import About from './About';
import Profile from './Profile';
import Users from './Users';
import HomePage from './HomePage';
import SideNav from './sideNav';
import {BrowserRouter as Router,Route,browserHistory,IndexRoute,Link,Switch} from 'react-router-dom';
// import { Switch } from 'react-router';

class MainLayOut extends Component {
   
       
    render() { 
        return (  
            <div className="container">
                 <SideNav/>
                 <Router>
                    <div className="menu">
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/about" component={About}/>
                            <Route path="/users" component={Users}/>
                        </Switch>
                    </div>
                 </Router>
              </div> 
           );
    }
}
 
export default MainLayOut;