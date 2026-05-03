import { gifsList } from "../data/gifs";
import { useShuffledList } from "../hooks/useShuffledList";

const Gifs = () => {
  const { current, getNext } = useShuffledList(gifsList);

  return (
    <div className="sub-container">
      <h2>Cute Distractions</h2>
      <img src={current} alt="cute GIF goes here" className="cute-gif" />
      <br />
      <button className="next-btn" onClick={getNext}>
        Next GIF
      </button>
    </div>
  );
};

export default Gifs;
