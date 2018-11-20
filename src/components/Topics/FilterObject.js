import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state={
            unfilteredArray: [
                {"Name": "John Smith", "Title": "CEO", "Age": 48},
                {"Name": "Richard B. Riddick", "Hobbies": "Escaping", "Eye Color": "Silver"},
                {"Name": "Charles", "Type": "Doll", "Clothes": "Overalls"}
            ],
            userInput: "",
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.filterObjs = this.filterObjs.bind(this)
    }

    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    filterObjs(){
        this.setState({
            filteredArray: this.state.unfilteredArray.filter((val, i, arr) =>
            val.hasOwnProperty(this.state.userInput)
        )
    })
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" value={this.state.userInput} onChange={this.handleChange}/>
                <button className="confirmationButton" onClick={this.filterObjs}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}
export default FilterObject;
