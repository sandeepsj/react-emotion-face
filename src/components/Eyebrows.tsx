import React from 'react';
import type { EyebrowShape } from '../types';

interface EyebrowsProps {
  shape: EyebrowShape;
  groupTransform?: string;
}

function BrowPaths({ shape }: { shape: EyebrowShape }) {
  const stroke = '#333';
  const sw = 3.5;
  const lc: React.SVGAttributes<SVGElement>['strokeLinecap'] = 'round';

  switch (shape) {
    case 'normal':
      return <>
        <path d="M 54 74 Q 66 70 78 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        <path d="M 122 74 Q 134 70 146 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
      </>;
    case 'raised':
      return <>
        <path d="M 54 68 Q 66 64 78 68" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        <path d="M 122 68 Q 134 64 146 68" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
      </>;
    case 'furrowed':
      return <>
        <path d="M 54 74 Q 66 78 78 70" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        <path d="M 122 70 Q 134 78 146 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
      </>;
    case 'sad':
      return <>
        <path d="M 54 72 Q 66 76 78 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        <path d="M 122 72 Q 134 76 146 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
      </>;
    case 'lifted':
      return <>
        <path d="M 54 72 Q 66 66 78 70" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        <path d="M 122 70 Q 134 66 146 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
      </>;
    case 'flat':
      return <>
        <line x1="54" y1="74" x2="78" y2="74" stroke={stroke} strokeWidth={sw} strokeLinecap={lc} />
        <line x1="122" y1="74" x2="146" y2="74" stroke={stroke} strokeWidth={sw} strokeLinecap={lc} />
      </>;
    case 'asymmetric':
      return <>
        <path d="M 54 68 Q 66 64 78 70" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        <path d="M 122 70 Q 134 78 146 72" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
      </>;
    default:
      return <>
        <path d="M 54 74 Q 66 70 78 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
        <path d="M 122 74 Q 134 70 146 74" stroke={stroke} strokeWidth={sw} fill="none" strokeLinecap={lc} />
      </>;
  }
}

export function Eyebrows({ shape, groupTransform }: EyebrowsProps) {
  return (
    <g transform={groupTransform}>
      <BrowPaths shape={shape} />
    </g>
  );
}
