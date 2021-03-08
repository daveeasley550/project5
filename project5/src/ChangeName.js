import React, { Component } from "react";

class ChangeName extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let joke = this.props.joke;
  
      return <div>{joke}</div>;
    }
  }
  
  export default ChangeName;
  




