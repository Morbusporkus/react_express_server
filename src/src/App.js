import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/homepage/Sidebar';
import Map from './components/Map/map'
//import Map from './components/Map/map';
//<div className = "sidebar_right"><Sidebar/></div>
// I wonder if you can have multiple divs and all that. 
function App() {
  return (
    
    <div className="App"> 
      <header>Header</header>
      <div className="row1"><p>column1</p></div>
      <div className="row2"><Map/></div>
      <div className="row3"><p>column3</p></div>
      
      
      
    </div>
    
  );
}

export default App;

