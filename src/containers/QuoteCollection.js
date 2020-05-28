import React, { Component } from 'react'
import QuoteCard from './QuoteCard.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'


class QuoteCollection extends Component {


    render() {
        return (
            <div className="col">
                <div>
                    <Link to= {'/collection'}>
                    My Collection
                    </Link>
                    {this.props.quotes.map(quote =>
                        <QuoteCard key={quote.id} quote={quote} />)}
                </div>
            </div>
        )
    }
}
export default QuoteCollection;
