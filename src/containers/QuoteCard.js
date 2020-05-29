import React from 'react';
import '../App.css';

const QuoteCard = (props) => {
    return (
        <div >
            <div>
                <h1> {props.quote.text}  </h1>
            </div>
            <div>
                {props.quote.author}
            </div>
            {/* <div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  props.deleteQuote(props.quote)}}
              >
                x
              </button>
        </div> */}
        </div>
    );
}

export default QuoteCard;
