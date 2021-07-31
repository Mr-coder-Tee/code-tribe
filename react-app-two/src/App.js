import logo from './logo.svg';
import React, { Component } from 'react';
import './MyCss.css';
import About from './components/About';
import Profile from './components/Profile';
import Users from './components/Users';
import HomePage from './components/HomePage';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container">
            <div className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Users</a></li>
                </ul>
            </div>
            <div className="menu">
                <Profile/>
            </div>
        </div> 
     );
  }
}
 
export default App;
