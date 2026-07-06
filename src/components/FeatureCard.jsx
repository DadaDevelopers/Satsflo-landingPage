import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="icon-wrapper">
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} />
        ) : (
          React.createElement(icon, { size: 56, color: '#FFFFFF', strokeWidth: 1.75 })
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
