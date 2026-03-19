import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MouthShape } from '../types';

interface MouthProps {
  shape: MouthShape;
}

// Morphable paths — all use same SVG command count: M x y Q cx cy ex ey
const MORPHABLE: Partial<Record<MouthShape, string>> = {
  smile:  'M 85 115 Q 100 130 115 115',
  frown:  'M 85 125 Q 100 110 115 125',
  angry:  'M 85 120 Q 100 112 115 120',
  flat:   'M 90 118 Q 100 118 110 118',
  tight:  'M 90 118 Q 100 122 110 118',
  smirk:  'M 90 118 Q 100 125 110 110',
};

function MorphableMouth({ shape }: { shape: MouthShape }) {
  const d = MORPHABLE[shape] || MORPHABLE.flat!;
  return (
    <motion.path
      d={d}
      animate={{ d }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      stroke="#333"
      strokeWidth={3.5}
      fill="none"
      strokeLinecap="round"
    />
  );
}

function SurprisedO() {
  return <ellipse cx={100} cy={118} rx={8} ry={10} fill="#333" />;
}

function ExcitedOpen() {
  return (
    <g>
      <path d="M 82 114 Q 100 134 118 114" stroke="#333" strokeWidth={3.5} fill="#cc4444" strokeLinecap="round" />
      <path d="M 82 114 Q 100 134 118 114 Z" fill="#cc4444" />
    </g>
  );
}

function SillyMouth() {
  return (
    <g>
      <path d="M 85 116 Q 100 128 115 116" stroke="#333" strokeWidth={3.5} fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx={100} cy={125} rx={8} ry={6} fill="#FF69B4" stroke="#333" strokeWidth={2} />
    </g>
  );
}

function ZigzagMouth() {
  return (
    <polyline
      points="85,122 90,116 95,122 100,116 105,122 110,116 115,120"
      stroke="#333"
      strokeWidth={3.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function LaughMouth() {
  return (
    <g>
      {/* Wide open laugh — filled interior + teeth */}
      <path d="M 80 112 Q 100 138 120 112" stroke="#333" strokeWidth={3.5} fill="#cc4444" strokeLinecap="round" />
      <line x1="80" y1="112" x2="120" y2="112" stroke="#333" strokeWidth={3} />
      {/* Teeth row */}
      <rect x={83} y={108} width={9} height={7} rx={2} fill="white" stroke="#ccc" strokeWidth={0.5} />
      <rect x={94} y={107} width={12} height={8} rx={2} fill="white" stroke="#ccc" strokeWidth={0.5} />
      <rect x={108} y={108} width={9} height={7} rx={2} fill="white" stroke="#ccc" strokeWidth={0.5} />
    </g>
  );
}

const STRUCTURAL: Set<MouthShape> = new Set(['surprised-o', 'excited-open', 'silly', 'zigzag', 'laugh']);

export function Mouth({ shape }: MouthProps) {
  if (STRUCTURAL.has(shape)) {
    return (
      <AnimatePresence mode="wait">
        <motion.g
          key={shape}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{ transformOrigin: '100px 122px' }}
        >
          {shape === 'surprised-o' && <SurprisedO />}
          {shape === 'excited-open' && <ExcitedOpen />}
          {shape === 'silly' && <SillyMouth />}
          {shape === 'zigzag' && <ZigzagMouth />}
          {shape === 'laugh' && <LaughMouth />}
        </motion.g>
      </AnimatePresence>
    );
  }

  return <MorphableMouth shape={shape} />;
}
