import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.updatePalind = this.updatePalind.bind(this);
    }

    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    updatePalind(){
        let forwards = this.state.userInput;
        let backwards = this.state.userInput;
        // console.log(userInput.target.value)
        // console.log(this.state.userInput)
        backwards = backwards
                        .split("")
                        .reverse()
                        .join("");


        if(forwards === backwards){
            this.setState({
                palindrome: "true"
            });
        }
        else{
            this.setState({
                palindrome: "false"
            });
        }
    }
    
    
    render () {
        console.log(this.state.palindrome)
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" value={this.state.userInput} onChange={this.handleChange}/>
                <button className="confirmationButton" onClick={this.updatePalind}>Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}
export default Palindrome;

