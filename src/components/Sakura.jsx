import { useEffect, useState } from "react";
import "./Sakura.css";

const Sakura = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animDuration: 8 + Math.random() * 7,
      animDelay: Math.random() * 5,
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="sakura-container" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="sakura-leaf"
          style={{
            left: `${leaf.left}vw`,
            animationDuration: `${leaf.animDuration}s`,
            animationDelay: `${leaf.animDelay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Sakura;
