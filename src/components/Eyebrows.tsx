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
          <path d="M 54 74 Q 66 70 78 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 122 74 Q 134 70 146 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'raised':
      return (
        <g>
          <path d="M 54 68 Q 66 64 78 68" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 122 68 Q 134 64 146 68" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'furrowed':
      return (
        <g>
          <path d="M 54 74 Q 66 78 78 70" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 122 70 Q 134 78 146 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'sad':
      return (
        <g>
          <path d="M 54 72 Q 66 76 78 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 122 72 Q 134 76 146 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'lifted':
      return (
        <g>
          <path d="M 54 72 Q 66 66 78 70" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 122 70 Q 134 66 146 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    case 'flat':
      return (
        <g>
          <line x1="54" y1="74" x2="78" y2="74" stroke={stroke} strokeWidth={sw} strokeLinecap={lc} />
          <line x1="122" y1="74" x2="146" y2="74" stroke={stroke} strokeWidth={sw} strokeLinecap={lc} />
        </g>
      );
    case 'asymmetric':
      // Left brow raised (confused), right brow furrowed
      return (
        <g>
          <path d="M 54 68 Q 66 64 78 70" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 122 70 Q 134 78 146 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
    default:
      return (
        <g>
          <path d="M 54 74 Q 66 70 78 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
          <path d="M 122 74 Q 134 70 146 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        </g>
      );
  }
}
