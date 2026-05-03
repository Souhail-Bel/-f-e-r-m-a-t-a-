import React from 'react';
import './Sky.css';

const Sky = ({ theme }) => {
  return (
    <div className={`sky-layers ${theme}`}>
      <div className="star-field"></div>
      <div className="celestial-body sun"></div>
      <div className="celestial-body moon">
        <div className="crater"></div>
      </div>
      <div className="horizon-glow"></div>
    </div>
  );
};

export default Sky;