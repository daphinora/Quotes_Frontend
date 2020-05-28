import React, { Component } from 'react'
import QuoteCard from './QuoteCard.js'


 class QuoteCollection extends Component {
    
    
    render() {
        return (
            <div className="col">
                <div>
              <h3 className="h3"><QuoteCard quote={this.props.quotes}/></h3>
            </div>
            </div>
        )
    }
}
export default QuoteCollection;