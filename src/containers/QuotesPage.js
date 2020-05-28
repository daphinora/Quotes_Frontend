import React, { Component } from 'react'
import QuoteCollection from './QuoteCollection.js'
import QuoteGenerator from './QuoteGenerator.js'

const URL = "http://localhost:3000/quotes"

class QuotesPage extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],

        }
    }

    componentDidMount() {
        this.getQuotes()
    }




    handleSaveClick = (e, q) => {
        e.stopPropagation()
        this.setState({
            quotes: this.state.quotes.map(quote => {
                if (quote === q) {
                    quote.saved = true
                }
                return quote
            })
        })
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
                <div className="card">
                    <QuoteCollection quotes={this.state.quotes.filter(quote => quote.saved)} />
                    <QuoteGenerator quotes={this.state.quotes} handleSaveClick={this.handleSaveClick} />
                </div>  
        )
    }
}

export default QuotesPage;