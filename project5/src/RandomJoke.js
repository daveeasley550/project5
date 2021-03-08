import React, { Component } from "react";

class RandomJoke extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let joke = this.props.joke;

    return <div>{joke}</div>;
  }
}

export default RandomJoke;
