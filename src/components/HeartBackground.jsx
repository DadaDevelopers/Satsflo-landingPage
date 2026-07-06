import React from 'react';

export default function HeartBackground({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="#FF99BC"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path
        d="M 50 20 
           C 35 5, 10 10, 10 38 
           C 10 62, 35 82, 50 82 
           C 65 82, 90 62, 90 38 
           C 90 10, 65 5, 50 20 Z"
        shapeRendering="geometricPrecision"
      />
    </svg>
  );
}
