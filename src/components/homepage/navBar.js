import React, { Component, useState } from 'react';
import './navBar.css'
// NOTE on css positions: https://www.freecodecamp.org/news/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26/
function navBar (){

    return(
        <div className = 'navBar'>
           <div className = "name"><h1>Skyler Fetter</h1></div>
            
            
            <div className = 'navGroup'>
                <ul>
                    <li><a href = "https://github.com/sfetter10">Github</a></li>
                    <li><a href = "https://www.linkedin.com/in/skyler-fetter-b219a956/">Linkedin</a></li>
                    <li><a>about</a></li>

                </ul>
                
                
                
                
            </div>
            
            
        </div>

    )
}

export default navBar;