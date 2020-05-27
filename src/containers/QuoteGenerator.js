import React, { Component } from 'react'
import QuoteCard from "./QuoteCard.js";

export default class QuoteGenerator extends Component {
    constructor() {
        super();
        this.state = {
            index: 1
        }
    }

    handleNextClick = event => {
        this.setState({index: this.state.index+1})
        // console.log("Hyeheey")
    }

    handleSaveClick = event => {
        console.log("saved :D")
    }

    renderQuote() {
        let quote = this.props.quotes.filter(q => q.id === this.state.index)
        // console.log(quote)
        return quote.map(quote => <div><QuoteCard key={quote.id} quote={quote} />
            <button onClick={(e) => this.handleNextClick()}>Next Quote</button>
            <button onClick={(e) => this.handleSaveClick()}>Save Quote</button></div>)
    }
    
    
    render() {
        return (
            <div>
                <h3>{this.renderQuote()}</h3>
            </div>
        )
    }
}
