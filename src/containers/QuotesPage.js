
import React, { Component } from 'react'
import QuoteCollection from './QuoteCollection.js'
import QuoteGenerator from './QuoteGenerator.js'

URL = "http://localhost:3000/quotes"

class QuotesPage extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],
            myquotes: []
        }
    }

    componentDidMount() {
        this.getQuotes()
    }

    handleSaveClick = (e, q) => {
        e.stopPropagation()
        this.setState({quotes: this.state.quotes.filter(quote => quote === q)})
        // console.log(quo.first)
        this.setState({myquotes: this.state.quotes})
        // console.log(this.state.myquotes)
        // this.getQuotes()
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
            <div className = "card">
                <QuoteCollection quotes={this.state.quotes} />
                <QuoteGenerator quotes={this.state.quotes} handleSaveClick={this.handleSaveClick}/>
            </div>
        )
    }
}

export default QuotesPage;