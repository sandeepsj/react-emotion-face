import React from 'react';

interface BodyProps {
  color: string;
  tilt?: number;
}

export function Body({ color, tilt = 0 }: BodyProps) {
  const strokeColor = '#333';
  const strokeWidth = 4;

  return (
    <g
      transform={`rotate(${tilt}, 100, 160)`}
      style={{ transformOrigin: '100px 160px' }}
    >
      {/* Neck */}
      <line
        x1="100" y1="155" x2="100" y2="175"
        stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"
      />
      {/* Torso */}
      <line
        x1="100" y1="175" x2="100" y2="225"
        stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"
      />
      {/* Left arm */}
      <line
        x1="100" y1="185" x2="70" y2="215"
        stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"
      />
      {/* Right arm */}
      <line
        x1="100" y1="185" x2="130" y2="215"
        stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"
      />
      {/* Left leg */}
      <line
        x1="100" y1="225" x2="78" y2="265"
        stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"
      />
      {/* Right leg */}
      <line
        x1="100" y1="225" x2="122" y2="265"
        stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"
      />
    </g>
  );
}
