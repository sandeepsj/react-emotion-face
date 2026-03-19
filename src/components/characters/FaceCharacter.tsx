import React from 'react';
import type { EmotionConfig } from '../../types';
import { Eyes } from '../Eyes';
import { Eyebrows } from '../Eyebrows';
import { Mouth } from '../Mouth';
import { Accessories } from '../Accessories';

export const FACE_VIEWBOX = '0 20 200 160';

interface Props {
  config: EmotionConfig;
  color: string;
  animated: boolean;
}

export function FaceCharacter({ config, color, animated }: Props) {
  return (
    <>
      {/* Rounded-rectangle head */}
      <rect x={25} y={25} width={150} height={140} rx={45} fill={color} stroke="#333" strokeWidth={3} />

      {/* Permanent cheeks */}
      <ellipse cx={56} cy={105} rx={12} ry={8} fill="#ff8c8c" opacity={0.5} />
      <ellipse cx={144} cy={105} rx={12} ry={8} fill="#ff8c8c" opacity={0.5} />

      <Accessories config={config.accessories} animated={animated} />
      <Eyebrows shape={config.eyebrowShape} />
      <Eyes shape={config.eyeShape} animated={animated} />
      <Mouth shape={config.mouthShape} />
    </>
  );
}
