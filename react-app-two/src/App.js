import logo from './logo.svg';
import React, { Component } from 'react';
import './MyCss.css';
import About from './components/About';
import Profile from './components/Profile';
import Users from './components/Users';
import HomePage from './components/HomePage';

const homeView=({onClick})=>{
    <HomePage/>;
};
const aboutView=({onClick})=>{
    <About/>;
};
const usersView=({onClick})=>{
    <Users/>;
};
const profileView=({onClick})=>{
    <Profile/>;
};
const Apps=()=>{
  const [currentview,setcurrentview]=React.useState("home");
}


class App extends Component {
  
  
   
  render() { 
    return ( 
      <div className="container">
            <div className="nav">
                <button className="btn" onClick={this.bringToFront(this.home)}>home</button>
                <button className="btn" onClick={this.bringToFront(this.about)}>About</button>
                <button className="btn" onClick={this.bringToFront(this.profile)}>Profile</button>
                <button className="btn" onClick={this.bringToFront(this.user)}>User</button>
            </div>
            <div className="menu">
                {this.state.currentframe}
            </div>
        </div> 
     );
  }
  
}
 
export default App;
