import React, { Component } from 'react';
import QuoteCollection from './QuoteCollection.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const URL = "http://localhost:3000/quotes"

class CollectionPage extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],
            q: []
        }
    }

    componentDidMount() {
        this.getQuotes()
    }

    positiveReturn() {
        document.querySelector("body").classList.add("positive")
        document.querySelector("button").style.backgroundColor = "orange"

        alert("Hey, you're pretty positive! Keep up the good work!")
    }

    negativeReturn() {
        document.querySelector("body").classList.add("negative")
        document.querySelector("button").style.backgroundColor = "grey"
        alert("Hey, you suck. Why not make some better life choices?")
    }

    neutralReturn() {
        // document.querySelector("body").classList.add("neutral")
        alert("meh. who cares")
    }

    returnSentiment() {
        if (this.state.q >= 1) {
            this.positiveReturn()
        }
        else if (this.state.q <= -1) {
            this.negativeReturn()
        }
        else {
            this.neutralReturn()
        }
    }

    getAnalysis = (e) => {
        this.setState({
            q: this.state.quotes.filter(quote => quote.saved).map(quote => {
                if (quote.sentiment === "positive") {
                    return 1
                }
                else if (quote.sentiment === "negative") {
                    return -1
                }
                else if (quote.sentiment === "neutral") {
                    return 0
                }
            }
            ).reduce(function (total, amount) {
                return total + amount
            })
        })

        this.returnSentiment()
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
            <div >
                <div className="nav">
                    <QuoteCollection quotes={this.state.quotes.filter(quote => quote.saved)} />
                    <Link to={'/'} >
                        Generate New Quote
                    </Link>
                </div>
                <button className="btnnDivv" onClick={(e) => this.getAnalysis()}>Analyze My Sentiments!</button>
            </div>
        )
    }
}

export default CollectionPage;
