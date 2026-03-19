import React from 'react';
import type { EyebrowShape } from '../types';

interface EyebrowsProps {
  shape: EyebrowShape;
}

export function Eyebrows({ shape }: EyebrowsProps) {
  const stroke = '#333';
  const sw = 3.5;
  const lc = 'round';

  switch (shape) {
    case 'normal':
      return (
        <g>
          <path d="M 60 62 Q 72 58 84 62" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 116 62 Q 128 58 140 62" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'raised':
      return (
        <g>
          <path d="M 60 56 Q 72 52 84 56" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 116 56 Q 128 52 140 56" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'furrowed':
      return (
        <g>
          <path d="M 60 62 Q 72 66 84 58" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 116 58 Q 128 66 140 62" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'sad':
      return (
        <g>
          <path d="M 60 60 Q 72 64 84 60" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 116 60 Q 128 64 140 60" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'lifted':
      return (
        <g>
          <path d="M 60 60 Q 72 54 84 58" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 116 58 Q 128 54 140 60" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'flat':
      return (
        <g>
          <line x1="60" y1="62" x2="84" y2="62" stroke={stroke} strokeWidth={sw} strokeLinecap={lc} />
          <line x1="116" y1="62" x2="140" y2="62" stroke={stroke} strokeWidth={sw} strokeLinecap={lc} />
        </g>
      );
    case 'asymmetric':
      // Left brow raised (confused), right brow furrowed
      return (
        <g>
          <path d="M 60 56 Q 72 52 84 58" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 116 58 Q 128 66 140 60" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    default:
      return (
        <g>
          <path d="M 60 62 Q 72 58 84 62" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 116 62 Q 128 58 140 62" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
  }
}
