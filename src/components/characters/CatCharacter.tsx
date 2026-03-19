import React from 'react';
import type { EmotionConfig } from '../../types';
import { Eyes } from '../Eyes';
import { Eyebrows } from '../Eyebrows';
import { Mouth } from '../Mouth';
import { Accessories } from '../Accessories';

export const CAT_VIEWBOX = '0 0 200 220';

// Cat eyes — slightly lower and closer together for the rounder face
const CAT_EYE_POSITIONS: [{ cx: number; cy: number }, { cx: number; cy: number }] = [
  { cx: 72, cy: 108 },
  { cx: 128, cy: 108 },
];

// Brows shift down ~13px from face baseline
const CAT_BROW_TRANSFORM = 'translate(0, 13)';

// Mouth sits below the cat nose
const CAT_MOUTH_TRANSFORM = 'translate(0, 32)';

// Blush on cheeks beside nose
const CAT_BLUSH: [{ cx: number; cy: number }, { cx: number; cy: number }] = [
  { cx: 68, cy: 122 },
  { cx: 132, cy: 122 },
];

interface Props {
  config: EmotionConfig;
  color: string;
  animated: boolean;
}

export function CatCharacter({ config, color, animated }: Props) {
  return (
    <>
      {/* ── Pointy ears (behind head) ── */}
      {/* Left ear outer */}
      <polygon points="40,90 64,38 92,84" fill={color} stroke="#333" strokeWidth={3} strokeLinejoin="round" />
      {/* Left ear inner (pink) */}
      <polygon points="50,84 63,50 84,80" fill="rgba(255,130,160,0.55)" />

      {/* Right ear outer */}
      <polygon points="160,90 136,38 108,84" fill={color} stroke="#333" strokeWidth={3} strokeLinejoin="round" />
      {/* Right ear inner */}
      <polygon points="150,84 137,50 116,80" fill="rgba(255,130,160,0.55)" />

      {/* ── Head ── */}
      <circle cx={100} cy={118} r={72} fill={color} stroke="#333" strokeWidth={3} />

      {/* ── Nose ── */}
      {/* Small inverted triangle */}
      <polygon points="94,136 106,136 100,144" fill="#FF9999" stroke="#CC6677" strokeWidth={1} />

      {/* ── Whiskers ── */}
      {/* Left whiskers */}
      <line x1={18} y1={136} x2={90} y2={140} stroke="#555" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />
      <line x1={16} y1={143} x2={90} y2={145} stroke="#555" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />
      <line x1={20} y1={150} x2={90} y2={149} stroke="#555" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />
      {/* Right whiskers */}
      <line x1={182} y1={136} x2={110} y2={140} stroke="#555" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />
      <line x1={184} y1={143} x2={110} y2={145} stroke="#555" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />
      <line x1={180} y1={150} x2={110} y2={149} stroke="#555" strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />

      {/* ── Face features ── */}
      <Accessories
        config={config.accessories}
        animated={animated}
        blushPositions={CAT_BLUSH}
      />
      <Eyebrows shape={config.eyebrowShape} groupTransform={CAT_BROW_TRANSFORM} />
      <Eyes shape={config.eyeShape} animated={animated} positions={CAT_EYE_POSITIONS} />
      <Mouth shape={config.mouthShape} groupTransform={CAT_MOUTH_TRANSFORM} />
    </>
  );
}
