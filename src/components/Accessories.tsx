import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AccessoryConfig } from '../types';

interface AccessoriesProps {
  config: AccessoryConfig;
  animated: boolean;
}

function Blush() {
  return (
    <g>
      <ellipse cx={62} cy={100} rx={14} ry={8} fill="#FF9999" opacity={0.6} />
      <ellipse cx={138} cy={100} rx={14} ry={8} fill="#FF9999" opacity={0.6} />
    </g>
  );
}

function Tears({ animated }: { animated: boolean }) {
  return (
    <g>
      <ellipse
        cx={68} cy={100} rx={4} ry={6}
        fill="#4FC3F7"
        className={animated ? 'ef-tear-1' : ''}
      />
      <ellipse
        cx={132} cy={100} rx={4} ry={6}
        fill="#4FC3F7"
        className={animated ? 'ef-tear-2' : ''}
      />
    </g>
  );
}

function FloatingZ({ animated }: { animated: boolean }) {
  return (
    <g>
      <text
        x={145} y={65}
        fontSize={16}
        fontWeight="bold"
        fill="#9999CC"
        className={animated ? 'ef-float-z-1' : ''}
        style={{ userSelect: 'none' }}
      >Z</text>
      <text
        x={155} y={50}
        fontSize={12}
        fontWeight="bold"
        fill="#9999CC"
        className={animated ? 'ef-float-z-2' : ''}
        style={{ userSelect: 'none' }}
      >z</text>
      <text
        x={163} y={38}
        fontSize={9}
        fontWeight="bold"
        fill="#9999CC"
        className={animated ? 'ef-float-z-3' : ''}
        style={{ userSelect: 'none' }}
      >z</text>
    </g>
  );
}

function FloatingHearts({ animated }: { animated: boolean }) {
  const hearts = [
    { x: 148, y: 65, size: 12, cls: 'ef-float-heart-1' },
    { x: 160, y: 50, size: 9, cls: 'ef-float-heart-2' },
    { x: 138, y: 45, size: 7, cls: 'ef-float-heart-3' },
  ];
  return (
    <g>
      {hearts.map(({ x, y, size, cls }, i) => (
        <text
          key={i}
          x={x} y={y}
          fontSize={size}
          fill="#FF4D6D"
          className={animated ? cls : ''}
          style={{ userSelect: 'none' }}
        >♥</text>
      ))}
    </g>
  );
}

function SweatDrop({ animated }: { animated: boolean }) {
  return (
    <g className={animated ? 'ef-sweat-drop' : ''}>
      <path
        d="M 148 68 Q 152 60 156 68 Q 156 74 152 75 Q 148 74 148 68 Z"
        fill="#87CEEB"
        stroke="#6699CC"
        strokeWidth={1}
      />
    </g>
  );
}

function Sparkles({ animated }: { animated: boolean }) {
  const sparkleData = [
    { x: 148, y: 52, cls: 'ef-sparkle-1' },
    { x: 155, y: 68, cls: 'ef-sparkle-2' },
    { x: 40, y: 60, cls: 'ef-sparkle-3' },
    { x: 48, y: 75, cls: 'ef-sparkle-4' },
  ];
  return (
    <g>
      {sparkleData.map(({ x, y, cls }, i) => (
        <text
          key={i}
          x={x} y={y}
          fontSize={14}
          fill="#FFD700"
          className={animated ? cls : ''}
          style={{ userSelect: 'none' }}
        >✦</text>
      ))}
    </g>
  );
}

function AngerLines() {
  return (
    <g className="ef-anger-pulse">
      <path d="M 42 52 L 50 44 L 58 52 L 50 60 Z" fill="#FF4444" opacity={0.85} />
      <line x1="46" y1="48" x2="54" y2="56" stroke="#CC0000" strokeWidth={2} />
      <line x1="54" y1="48" x2="46" y2="56" stroke="#CC0000" strokeWidth={2} />
    </g>
  );
}

function QuestionMark() {
  return (
    <text
      x={148} y={62}
      fontSize={22}
      fontWeight="bold"
      fill="#666"
      style={{ userSelect: 'none' }}
    >?</text>
  );
}

export function Accessories({ config, animated }: AccessoriesProps) {
  const {
    blush, tears, zFloating, heartsFloating,
    sweatDrop, sparkles, angerLines, questionMark,
  } = config;

  return (
    <AnimatePresence>
      {blush && (
        <motion.g key="blush" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Blush />
        </motion.g>
      )}
      {tears && (
        <motion.g key="tears" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Tears animated={animated} />
        </motion.g>
      )}
      {zFloating && (
        <motion.g key="z" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <FloatingZ animated={animated} />
        </motion.g>
      )}
      {heartsFloating && (
        <motion.g key="hearts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <FloatingHearts animated={animated} />
        </motion.g>
      )}
      {sweatDrop && (
        <motion.g key="sweat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <SweatDrop animated={animated} />
        </motion.g>
      )}
      {sparkles && (
        <motion.g key="sparkles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Sparkles animated={animated} />
        </motion.g>
      )}
      {angerLines && (
        <motion.g key="anger" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <AngerLines />
        </motion.g>
      )}
      {questionMark && (
        <motion.g key="question" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <QuestionMark />
        </motion.g>
      )}
    </AnimatePresence>
  );
}
