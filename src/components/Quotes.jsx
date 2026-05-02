import { useState, useEffect } from "react";
import { quotesList } from "../data/quotes";

const Quotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const fullQuote = quotesList[quoteIndex];

  useEffect(() => {
    let i = 0;
    setIsTyping(true);
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      if (i < fullQuote.length) {
        setDisplayedText((prev) => prev + fullQuote.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [quoteIndex, fullQuote]);

  const newQuote = () => {
    let random;
    do {
      random = Math.floor(Math.random() * quotesList.length);
    } while (random === quoteIndex && quotesList.length > 1);
    setQuoteIndex(random);
  };

  return (
    <div className="sub-container">
      <h2>Words of Comfort</h2>

      <p className="quote-text">
        {displayedText.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        <span className="blinking-cursor">_</span>
      </p>

      <button className="next-btn" onClick={newQuote} disabled={isTyping}>
        {isTyping ? "Receiving..." : "New Quote"}
      </button>
    </div>
  );
};

export default Quotes;
