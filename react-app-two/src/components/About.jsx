  import React, { Component } from 'react';

  const About=()=>{
    return(
        <div>
            <div className="header">
                <div className="c"><h1>Carriculum Vitae</h1>
                <img className="myprofile" src="./images/profilepic.jpg" alt="" /></div>
            </div>
            <div className="personal-info">
                <div className="header-div"><h3>Personal Information</h3></div>
                <div className="padding">
                    <p><span>Name: Terrence Tebatso Manaka</span></p>
                    <p><span>ID no#: 901204 2332 080</span></p>
                    <p><span>Address: Makgofe village</span></p>
                    <p><span>Gender: Male</span></p>
                    <p><span>Nationality: South African</span></p>
                    <p><span>DoB: 08-12-1990</span></p>
                </div>
            </div>
            <div className="profile">
                <div className="header-div"><h3>Profile</h3></div>
                <div className="padding"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore nisi, cumque ad eaque facilis facere officiis laborum. Odit repudiandae aut accusantium nostrum iusto tenetur ducimus esse quasi corporis reprehenderit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus id animi minima ad ut. Ratione doloremque itaque excepturi animi aliquam.</p></div>
            </div>
            <div className="objective">
                <div className="header-div"><h3>Objective</h3></div>
                <div className="padding"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a optio soluta temporibus mollitia officiis doloremque amet quibusdam veniam distinctio similique, fuga laborum nesciunt aliquid placeat inventore totam odit ab. Cupiditate eius tempora dignissimos! Vero rem quia explicabo dicta quod.</p></div>
            </div>
            <div className="education">
                <div className="header-div"><h3>Education</h3></div>
                <div className="padding">
                    <p><span>Name of Institution: University of Limpopo</span></p>
                    <p><span>Qualification: Computer Science</span></p>
                    <p><span>Year of complition: 2020</span></p>
                </div>
            </div>
        </div>
    );
  };

  export default About;