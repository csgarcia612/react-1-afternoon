import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor (){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.assignNumbers = this.assignNumbers.bind(this);
    }


    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    assignNumbers(){
        let arr = this.state.userInput.split(',');
        let evens = [];
        let odds = [];

        for(let i = 0; i<arr.length; i++){
            if(arr[i] % 2 === 0){
                evens.push(arr[i]);
            } else if (arr[i] % 2 !== 0) {
                odds.push(arr[i]);
            }
    }
        console.log(evens);
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }


    render () {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" value={this.state.userInput} onChange={this.handleChange}/>
                <button className="confirmationButton" onClick={this.assignNumbers}>Split</button>
                <span className="resultsBox">Evens: {`${this.state.evenArray}`}</span>
                <span className="resultsBox">{`Odds: ${this.state.oddArray}`}</span>
            </div>
        )
    }
}
export default EvenAndOdd;