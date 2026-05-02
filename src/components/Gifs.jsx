import { useState } from "react";
import { gifsList } from "../data/gifs";

const Gifs = () => {
  const [gif, setGif] = useState(gifsList[0]);

  const newGIF = () => {
    setGif(gifsList[Math.floor(Math.random() * gifsList.length)]);
  };

  return (
    <div className="sub-container">
      <h2>Cute Distractions</h2>
      <img src={gif} alt="cute GIF goes here" className="cute-gif" />
      <br />
      <button className="next-btn" onClick={newGIF}>
        Next GIF
      </button>
    </div>
  );
};

export default Gifs;
