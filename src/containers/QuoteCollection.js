import React, { Component } from 'react'
import QuoteCard from './QuoteCard.js'


class QuoteCollection extends Component {


    render() {
        return (
            <div className="col">
                <div>
                    <h3>My Collection</h3>
                    {this.props.quotes.map(quote =>
                        <QuoteCard key={quote.id} quote={quote} />)}
                </div>
            </div>
        )
    }
}
export default QuoteCollection;