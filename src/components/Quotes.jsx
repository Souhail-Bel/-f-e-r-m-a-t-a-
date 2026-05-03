import { useState, useEffect } from "react";
import { quotesList } from "../data/quotes";
import { useShuffledList } from "../hooks/useShuffledList";

const Quotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const { current, getNext } = useShuffledList(quotesList);

  useEffect(() => {
    let i = 0;
    setIsTyping(true);
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => {
        if (i < current.length) {
          return current.substring(0, i + 1);
        }
        return prev;
      });

      i++;

      if (i >= current.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [current]);

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

      <button className="next-btn" onClick={getNext} disabled={isTyping}>
        {isTyping ? "Receiving..." : "New Quote"}
      </button>
    </div>
  );
};

export default Quotes;
