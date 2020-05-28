import React from 'react';
import '../App.css';

const QuoteCard = (props) => {
    return (
        <div >
            <div>
                <h1> The greatest glory in living lies not in never falling, 
                    but in rising every time we fall  </h1>
            </div>
            <div className="author">
                {props.quote.author}
            </div>
        </div>
    );
}

export default QuoteCard;
