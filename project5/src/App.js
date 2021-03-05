import React, { Component } from "react";
import './App.css';
import {Route, Link} from "react-router-dom";
import RandomJoke from './RandomJoke';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      oldJokes: []
    }
  }
handleJoke =(joke)=>{
  console.log(joke)
  this.setState({joke: joke});

}
// function App() {
  render(){
  return (
    <div className="App">
     <h1>waka waka</h1> 
     <RandomJoke joke={this.state.joke}handleJoke={(joke)=>this.handleJoke(joke)}/>
     
    </div>
  );
  }
// }
}
export default App;
