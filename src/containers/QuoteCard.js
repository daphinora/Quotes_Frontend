import React from 'react';

const QuoteCard = (props) => {
    return (
        <div>
           {props.quote.author} 
        <button onClick={(e) => props.handleClick()}>Next Quote</button>
        </div>
    );
}

export default QuoteCard;
