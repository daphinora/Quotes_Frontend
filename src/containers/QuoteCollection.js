import React, { Component } from 'react'
import QuoteCard from './QuoteCard.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'


class QuoteCollection extends Component {


    render() {
        return (
            <div className="col">
                <div className="nav">
                    <Link to={'/collection'} >
                        My Collection
                    </Link>
                    <h4 >
                        {this.props.quotes.map(quote =>
                            <QuoteCard key={quote.id} quote={quote} deleteQuote={this.props.deleteQuote} />)}
                    </h4>
                </div>
            </div>
        )
    }
}
export default QuoteCollection;
