import React from 'react';
import type { EmotionConfig } from '../../types';
import { Eyes } from '../Eyes';
import { Eyebrows } from '../Eyebrows';
import { Mouth } from '../Mouth';
import { Accessories } from '../Accessories';

// Dog face uses a taller viewBox to fit floppy ears
export const DOG_VIEWBOX = '0 0 200 230';

// Eyes sit higher, horizontally centred above snout
const DOG_EYE_POSITIONS: [{ cx: number; cy: number }, { cx: number; cy: number }] = [
  { cx: 72, cy: 102 },
  { cx: 128, cy: 102 },
];

// Eyebrows shift down ~8px from the face-character baseline
const DOG_BROW_TRANSFORM = 'translate(0, 8)';

// Mouth sits on the snout (~50px lower than face-character mouth)
const DOG_MOUTH_TRANSFORM = 'translate(0, 50)';

// Blush on the snout cheeks
const DOG_BLUSH: [{ cx: number; cy: number }, { cx: number; cy: number }] = [
  { cx: 78, cy: 164 },
  { cx: 122, cy: 164 },
];

interface Props {
  config: EmotionConfig;
  color: string;
  animated: boolean;
}

export function DogCharacter({ config, color, animated }: Props) {
  return (
    <>
      {/* ── Floppy ears (behind head) ── */}
      {/* Left ear */}
      <ellipse
        cx={38} cy={128} rx={24} ry={52}
        transform="rotate(-10, 38, 128)"
        fill={color} stroke="#333" strokeWidth={3}
      />
      {/* Right ear */}
      <ellipse
        cx={162} cy={128} rx={24} ry={52}
        transform="rotate(10, 162, 128)"
        fill={color} stroke="#333" strokeWidth={3}
      />

      {/* ── Head ── */}
      <circle cx={100} cy={112} r={74} fill={color} stroke="#333" strokeWidth={3} />

      {/* ── Snout ── */}
      {/* Snout base — slightly lighter via semi-transparent white overlay */}
      <ellipse cx={100} cy={158} rx={34} ry={26} fill="rgba(255,255,255,0.35)" stroke="#555" strokeWidth={2} />

      {/* ── Nose ── */}
      <ellipse cx={100} cy={144} rx={14} ry={10} fill="#2a2a2a" />
      {/* Nose shine */}
      <ellipse cx={105} cy={141} rx={4} ry={2.5} fill="#666" opacity={0.7} />

      {/* ── Face features ── */}
      <Accessories
        config={config.accessories}
        animated={animated}
        blushPositions={DOG_BLUSH}
      />
      <Eyebrows shape={config.eyebrowShape} groupTransform={DOG_BROW_TRANSFORM} />
      <Eyes shape={config.eyeShape} animated={animated} positions={DOG_EYE_POSITIONS} />
      <Mouth shape={config.mouthShape} groupTransform={DOG_MOUTH_TRANSFORM} />
    </>
  );
}
