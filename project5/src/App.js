import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import RandomJoke from "./RandomJoke";
import ChangeName from "./ChangeName";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldJokes: [],
      joke: "",
      firstName: "",
      lastName: "",
      counter: -1,
    };
  }
  componentDidMount() {
    this.handleJoke();
  }
  previousJoke = () => {
    if (this.state.counter == 0) {
      this.setState({
        counter: this.state.oldJokes.length,
        joke: this.state.oldJokes[this.state.oldJokes.length - 1],
      });
    } else {
      this.setState({
        joke: this.state.oldJokes[this.state.counter - 1],
        counter: this.state.counter - 1,
      });
    }
  };
  handleJoke = (joke) => {
    const randomUrl = "https://api.icndb.com/jokes/random/";
    if (
      this.state.counter <= this.state.oldJokes.length 
    ) {
      fetch(randomUrl)
        .then((response) => response.json())
        .then((data) => {
          const joke = data.value.joke.replaceAll("&quot;", "'");
          this.setState({
            oldJokes: [...this.state.oldJokes, joke],
            joke: joke,
            counter: this.state.counter + 1,
          });
        });
    } else {
      this.previousJoke();
    }
  };
  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  nameJoke = (joke) => {
    const nameUrl = `http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&lastName=${this.state.lastName}`;
    fetch(nameUrl)
      .then((response) => response.json())
      .then((data) => {
        const joke = data.value.joke.replaceAll("&quot;", "'");
        this.setState({ oldJokes: [...this.state.oldJokes, joke], joke: joke, counter: this.state.counter + 1 });
      });
  };
  render() {
    return (
      <div className="App">
        <div className="title">
        <h1>Charles Norris</h1>
        </div>
        <div className="button">
        <div className="previous">
        <button onClick={this.previousJoke}>Previous Joke</button>
        </div>
        <div className="next">
        <button onClick={this.handleJoke}>Next Joke</button>
        </div>
        </div>
        <div className="joke">
        <RandomJoke joke={this.state.joke}/>
        </div>
        <div className="inputs">
        <input type="text" onChange={this.handleFirstName} placeholder="First Name"/>
        <input type="text" onChange={this.handleLastName} placeholder="Last Name"/>
        </div>
        <div className="name">
        <button onClick={this.nameJoke}>New Name Joke</button>
        </div>
      </div>
    );
  }
}
export default App;
