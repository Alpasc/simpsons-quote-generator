import React from 'react';

function DisplayQuote ({ quotes }) {
  return (
    <div className="QuoteCard">
      <img
        src={quotes.image}
        alt={quotes.character} 
      />
      <div>
        <blockquote>{quotes.quote}</blockquote>
        <p>
          <cite>{quotes.character}</cite>
        </p>
      </div>
    </div>
  );
};

export default DisplayQuote;