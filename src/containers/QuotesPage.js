
import React, { Component } from 'react'
import QuoteCollection from './QuoteCollection.js'
import QuoteGenerator from './QuoteGenerator.js'

URL = "http://localhost:3000/quotes"

class QuotesPage extends Component {
    constructor() {
        super();
        this.state = {
            quotes: []
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
                <QuoteCollection />
                <QuoteGenerator quotes={this.state.quotes} />
            </div>
        )
    }
}

export default QuotesPage;