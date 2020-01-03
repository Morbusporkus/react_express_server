import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/homepage/Sidebar';
import Map from './components/Map/map'
import Nav from './components/homepage/navBar'
import Swipe from './components/homepage/swiper'
//import Background from './components/homepage/background/Background.svg'
//import Map from './components/Map/map';
//<div className = "sidebar_right"><Sidebar/></div>
// I wonder if you can have multiple divs and all that. 

function App() {
  return (
    
    <div className="App"> 
      <div className = 'nav'><Nav/></div> 
      <div className = 'swipe'><Swipe/></div>
    </div>
    
  );
}

export default App;

