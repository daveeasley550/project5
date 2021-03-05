import React, { Component } from "react";




class RandomJoke extends Component{
        
            constructor(props){
                super(props)
            }
        
    componentDidMount(){
        const randomUrl = "https://api.icndb.com/jokes/random/"
        fetch(randomUrl)
        .then(response=> response.json())
        .then(response=> {
            const joke =response.value.joke
            this.props.handleJoke(joke)
            console.log(response)
        })
    }
    render(){
        let joke = this.props.joke
        return(
            <div>{joke}</div>
        )
    }
}



export default RandomJoke