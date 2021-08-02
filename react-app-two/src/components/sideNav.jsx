import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function SideNav(){
    return(
        <div className="nav">
            <ul>
                <li className="btn"><a  href="/">Home</a></li>
                <li className="btn"><a href="/about">About</a></li>
                <li className="btn"><a href="/profile">Profile</a></li>
                <li className="btn"><a  href="/users">Users</a></li>
                
                {/* <Link to="/"><li className="btn" >Home</li></Link>
                <Link to="/about"><li className="btn" to="/about">About</li></Link>
                <Link to="/profile"><li className="btn" to="/profile">Profile</li></Link>
                <Link to="/users"><li className="btn" to="/users">User</li></Link> */}
            </ul>
        </div>
                 

    );
}
 
export default SideNav;