import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg
        width="46"
        height="38"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: '#FF4081', flexShrink: 0 }}
      >
        {/* Central Petal */}
        <path
          d="M50 75 C50 75 32 50 32 32 C32 14 50 5 50 5 C50 5 68 14 68 32 C68 50 50 75 50 75 Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Mid Left Petal */}
        <path
          d="M50 75 C50 75 18 58 18 35 C18 12 44 14 47 18"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Mid Right Petal */}
        <path
          d="M50 75 C50 75 82 58 82 35 C82 12 56 14 53 18"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Outer Left Petal */}
        <path
          d="M50 75 C50 75 6 62 6 45 C6 28 32 30 36 34"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Outer Right Petal */}
        <path
          d="M50 75 C50 75 94 62 94 45 C94 28 68 30 64 34"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: 'Outfit, var(--font-sans), sans-serif',
          fontWeight: 800,
          fontSize: '32px',
          color: '#FF4081',
          letterSpacing: '-0.5px',
          lineHeight: '1',
        }}
      >
        Satsflo
      </span>
    </div>
  );
}
