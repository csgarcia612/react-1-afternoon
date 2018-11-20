import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super()
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
        this.handleChange1=this.handleChange1.bind(this)
        this.handleChange2=this.handleChange2.bind(this)
        this.addNums=this.addNums.bind(this);
    }

    handleChange1(event){
        this.setState({
            number1: event.target.value
        })
    }
    
    handleChange2(event){
        this.setState({
            number2: event.target.value
        })
    }

    addNums(){
        let add = +this.state.number1 + +this.state.number2;
        this.setState({
            sum: add
        })
    }

    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" value={this.state.number1} onChange={this.handleChange1}/>
                <input className="inputLine" value={this.state.number2} onChange={this.handleChange2}/>
                <button className="confirmationButton" onClick={this.addNums}>Add</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}
export default Sum;
