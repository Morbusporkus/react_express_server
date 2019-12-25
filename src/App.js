import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/homepage/Sidebar';
import Map from './components/Map/map';
//<div className = "sidebar_right"><Sidebar/></div>
// I wonder if you can have multiple divs and all that. 
function App() {
  return (
    <div className="App">
     
      <div className="sidebar"><Sidebar /></div>
      <div className = 'map'></div><Map />
      
    </div>
    
  );
}

export default App;

