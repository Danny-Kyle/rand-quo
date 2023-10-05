import React, { useState } from "react";
import "./RandomQuotes.css";

const RandomQuotes = () => {
  let quotes = [];

  async function getRandomQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "In the face of intense complexities, intense simplicities emerge",
    author: "Winston Churchill",
  });

  const randReload = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  getRandomQuotes();
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <p
              onClick={() => {
                randReload();
              }}
            >
              Reload
            </p>
            <p
              onClick={() => {
                twitter();
              }}
            >
              X
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuotes;
