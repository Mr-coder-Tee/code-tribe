import React, { Component } from 'react';
import About from './About';
import Profile from './Profile';
import Users from './Users';
import HomePage from './HomePage';

class MainLayOut extends Component {
    state={
        currentframe:<HomePage/>,
        other:<Users/>
      }
       
    render() { 
        return (  
            <div className="container">
                  <div className="nav">

                      <ul>
                          <li className="btn"><a href={this.state.currentframe}>Home</a></li>
                          <li className="btn"><a href="">About</a></li>
                          <li className="btn"><a href="">Profile</a></li>
                          <li className="btn"><a href="">User</a></li>
                      </ul>
                  </div>
                  <div className="menu">
                      {this.props.children}
                  </div>
              </div> 
           );
    }
}
 
export default MainLayOut;