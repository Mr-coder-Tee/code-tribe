import logo from './logo.svg';
import React, { Component } from 'react';
import './MyCss.css';
import About from './components/About';
import Profile from './components/Profile';
import Users from './components/Users';
import HomePage from './components/HomePage';



class App extends Component {
  
  state={
    currentframe:<HomePage/>,
  }
   
  render() { 
    return ( 
      <div className="container">
            <div className="nav">
                <button className="btn" >home</button>
                <button className="btn" >About</button>
                <button className="btn" >Profile</button>
                <button className="btn" >User</button>
            </div>
            <div className="menu">
                {this.state.currentframe}
            </div>
        </div> 
     );
  }
  
}
 
export default App;
