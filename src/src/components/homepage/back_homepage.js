import React, { Component } from 'react';
import './homepage.css';
// note: Customers is a component class that takes in paramters, called props
// and returns a heigherarchy of views to display via the render
// NOTE: super: is used to call parts of the parent class if you are extending that class as well. It also HAS to be before this
// NOTE :this: refers to the object that it belongs to. can be used to call attributes of the object in a function
//NOTE: a constructor a function that initalizes an objects
//NOTE: we can use the this to have certain areas be certain things I think. 
//NOTE: the App.js is used for discussing the interacies
//I think I can keep part of the DOM to just the leaftlet map, I think. hmmm

class Customers extends Component{
  // so this is how you pass data on. 
  
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }
  // this uses the fetch request to get stuff....Will have to learn on which one to use AJAX or fetch.
  componentDidMount(){
    fetch('/api/restaurants')
      .then(res => res.json())
      .then(restaurants => this.setState({restaurants}, () => console.log(restaurants)))
  }
  // so this does all the rendinging of the object
  render(){return (
    <div>
      <h2>Hello World!</h2>
      <p>this is a paragraph</p>

    </div>
  );
}
}

export default Customers;