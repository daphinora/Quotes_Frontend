import React from 'react';

const QuoteCard = (props) => {
    return (
        <div>
            <div>
                {props.quote.text}
            </div>
            <div>
                {props.quote.author}
            </div>
        </div>
    );
}

export default QuoteCard;
