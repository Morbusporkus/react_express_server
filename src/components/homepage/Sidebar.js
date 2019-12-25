import React, { Component, useState } from 'react';
import './Sidebar.css';

// note: Customers is a component class that takes in paramters, called props
// and returns a heigherarchy of views to display via the render
// NOTE: super: is used to call parts of the parent class if you are extending that class as well. It also HAS to be before this
// NOTE :this: refers to the object that it belongs to. can be used to call attributes of the object in a function
//NOTE: a constructor (this is alike _init_ in python) a function that initalizes an objects
//NOTE: we can use the this to have certain areas be certain things I think. 
//NOTE: the App.js is used for discussing the interacies
//I think I can keep part of the DOM to just the leaftlet map, I think. hmmm

  
  function SideBar(){
    // the first element is the current value for the state
    // the second is the setter than changes the value of the state
    const [count, setCount] = useState(0);
    return (
      // so you can have a div inside a div
      <div className = 'Sidebar'>
        <p>you clicked {count} times</p>
        <button onClick = {()=> setCount(count +1)}>
          click me
        </button>
       
      </div>
      
    );
  }
  // this is the render section of the class


export default SideBar;