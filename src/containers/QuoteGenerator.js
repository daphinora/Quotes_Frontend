import React, { Component } from 'react'
import QuoteCard from "./QuoteCard.js";

export default class QuoteGenerator extends Component {
    constructor() {
        super();
        this.state = {
            index: 1
        }
    }

    handleClick = event => {
        this.setState({index: this.state.index+1})
        // console.log("Hyeheey")
    }

    renderQuote() {
        let quote = this.props.quotes.filter(q => q.id === this.state.index)
        console.log(quote)
        return quote.map(quote => <QuoteCard key={quote.id} quote={quote} handleClick={this.handleClick}/>)
    }
    
    
    render() {
        return (
            <div>
                <h3>{this.renderQuote()}</h3>
            </div>
        )
    }
}
