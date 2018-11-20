import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state={
            unfilteredArray: ["Chris", "Ben", "John", "Christine", "Ashley", "Annie"],
            userInput: "",
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterStr = this.filterStr.bind(this);
    }

    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    filterStr(){
        this.setState({
            filteredArray: this.state.unfilteredArray.filter((val, i, arr) =>
            val.startsWith(this.state.userInput))
        })
    }

    render () {
        console.log(this.state.userInput)
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" value={this.state.userInput} onChange={this.handleChange}/>
                <button className="confirmationButton" onClick={this.filterStr}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}
export default FilterString;
