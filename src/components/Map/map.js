import React, { useState, Component  } from 'react';
import './map.css';

// trying to see if i can call a function that ineracts with the virtual dom and all of that
function helloWorld(){
  return (console.log('Hello from inside react.js'))
}






function map(){
   
  const hello = helloWorld();
   // trying to initalize map inside react.js
   


   // this is to return the whole map to the virtualDOM
    return (
      // for maps you have to do this for leaflet
      <div className = 'map' id = ''>
         
        
        <script>{hello}</script>
      </div>
      );
    } 


  
  export default map;