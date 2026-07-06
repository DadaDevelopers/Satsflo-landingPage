import React from 'react';

const PhaseItem = ({ color, title, text }) => {
  return (
    <div className="phase-item">
      <span className={`dot ${color}`}></span>
      <p>
        <strong>{title}:</strong> {text}
      </p>
    </div>
  );
};

export default PhaseItem;
