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
        this.setState({ index: this.state.index + 1 })
        // console.log("Hyeheey")
    }

    renderQuote() {
        let quote = this.props.quotes.filter(q => q.id === this.state.index)
        // console.log(quote)
        return quote.map(quote =>
            <div className="blockquote-wrapper">
                <div className="blockquote" >
                    <div className ="gen">
                    <QuoteCard key={quote.id} quote={quote} />
                    <button className="btnDiv" onClick={(e) => this.handleNextClick()}>Next Quote</button>
                    <button className="btnnDiv" onClick={(e) => this.props.handleSaveClick(e, quote)}>Save Quote</button>
                </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <div>
                <h3>{this.renderQuote()}</h3>
            </div>
        )
    }
}
