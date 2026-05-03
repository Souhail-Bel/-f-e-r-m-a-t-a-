import { useState } from "react";
import { useShuffledList } from "../hooks/useShuffledList";
import { lyricsList } from "../data/lyrics";
import "./Lyrics.css";

const Lyrics = () => {
  const { current, getNext } = useShuffledList(lyricsList);
  const [rotation, setRotation] = useState(0);

  const handleTune = () => {
    setRotation((prev) => prev + 22.5);
    getNext();
  };

  return (
    <div className="sub-container lyrics-display">
      <div className="tuner-header">
        <div className="signal-wave">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" />
          </svg>
        </div>

        <div className="knob-container" onClick={handleTune}>
          <div
            className="radio-knob"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="knob-indicator"></div>
          </div>
          <span className="knob-label">TUNE</span>
        </div>
      </div>

      <div className="lyrics-content">
        <div className="lyrics-lines">
          {current.text.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="artist-info">
          <span className="artist-name">— {current.source}</span>
          {current.link && (
            <a
              href={current.link}
              target="_blank"
              rel="noreferrer"
              className="source-link"
            >
              [SOURCE]
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
