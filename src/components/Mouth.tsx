import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MouthShape } from '../types';

interface MouthProps {
  shape: MouthShape;
}

// Morphable paths — all use same SVG command count: M x y Q cx cy ex ey
const MORPHABLE: Partial<Record<MouthShape, string>> = {
  smile:  'M 72 118 Q 100 140 128 118',
  frown:  'M 72 130 Q 100 112 128 130',
  angry:  'M 72 124 Q 100 116 128 124',
  flat:   'M 78 122 Q 100 122 122 122',
  tight:  'M 78 122 Q 100 126 122 122',
  smirk:  'M 78 122 Q 100 132 120 118',
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
  return <ellipse cx={100} cy={122} rx={14} ry={16} fill="#333" />;
}

function ExcitedOpen() {
  return (
    <g>
      <path d="M 68 114 Q 100 144 132 114" stroke="#333" strokeWidth={3.5} fill="#cc4444" strokeLinecap="round" />
      <path d="M 68 114 Q 100 144 132 114 Z" fill="#cc4444" />
    </g>
  );
}

function SillyMouth() {
  return (
    <g>
      <path d="M 72 116 Q 100 138 128 116" stroke="#333" strokeWidth={3.5} fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx={100} cy={134} rx={10} ry={8} fill="#FF69B4" stroke="#333" strokeWidth={2} />
    </g>
  );
}

function ZigzagMouth() {
  return (
    <polyline
      points="72,128 84,118 96,128 108,118 120,128 128,122"
      stroke="#333"
      strokeWidth={3.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

const STRUCTURAL: Set<MouthShape> = new Set(['surprised-o', 'excited-open', 'silly', 'zigzag']);

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
        </motion.g>
      </AnimatePresence>
    );
  }

  return <MorphableMouth shape={shape} />;
}
