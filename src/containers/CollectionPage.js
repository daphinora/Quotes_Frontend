import React, { Component } from 'react';
import QuoteCollection from './QuoteCollection.js'

const URL = "http://localhost:3000/quotes"

class CollectionPage extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],
        }
    }

    componentDidMount() {
        this.getQuotes()
    }

    getQuotes() {
        fetch(URL)
            .then(r => r.json())
            .then(quotes => this.setState({
                quotes: quotes
            }))
    }

    render() {
        return (
            <div>
                <QuoteCollection quotes={this.state.quotes.filter(quote => quote.saved)} />
                
            </div>
        )
    }
}

export default CollectionPage;
