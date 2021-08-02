import React, { Component } from 'react';
// import imgs from './images/email.png';

class Profile extends Component {
    state = {  }
    render() { 
        return ( <div className="card-background">

                <div className="card">
                    <div className="center">
                        <h1 className="m-2">Tebatso Manaka</h1>
                    </div>
                    <div className="center-straight">
                        <div className="flex">
                            <img src="./images/email.png" alt="" />
                            <div><p><span className="archer">Email : manaka@gmail</span></p></div>
                        </div>
                        <div className="flex">
                            <img src="./images/phone.png" alt="" />
                            <div><p><span className="archer">Phone : 0766166822</span></p></div>
                        </div>
                        <div className="flex">
                            <img src="./images/facebook.png" alt="" />
                            <div><p><span><a href="https://www.facebook.com/Tebatso-Manaka">facebook : Terrence Manaka</a></span></p></div>
                        </div>
                        <div className="flex">
                            <img src="./images/github2.png" alt="" />
                           
                            <div><p><span><a href="https://github.com/Mr-coder-Tee">Link : Mr-coder-Tee</a></span></p></div>
                        </div>
                    </div>
                </div> 
            </div> );
    }
}
 
export default Profile;