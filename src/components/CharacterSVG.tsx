import React from 'react';
import { motion } from 'framer-motion';
import type { EmotionConfig, CharacterType } from '../types';
import { FaceCharacter, FACE_VIEWBOX } from './characters/FaceCharacter';
import { DogCharacter, DOG_VIEWBOX } from './characters/DogCharacter';
import { CatCharacter, CAT_VIEWBOX } from './characters/CatCharacter';

interface CharacterSVGProps {
  config: EmotionConfig;
  color: string;
  animated: boolean;
  size: number;
  character: CharacterType;
}

function getIdleAnimate(config: EmotionConfig, animated: boolean) {
  if (!animated) return undefined;
  switch (config.idleAnimation.type) {
    case 'breathe':      return { scale: [1, 1.015, 1] };
    case 'slow-breathe': return { scale: [1, 1.01, 1] };
    case 'bounce':       return { y: [0, -12, -8, 0] };
    case 'pulse':        return { scale: [1, 1.06, 1] };
    case 'headBob':      return { y: [0, -4, -2, 0], rotate: [0, -2, 2, 0] };
    default:             return undefined;
  }
}

const VIEWBOXES: Record<CharacterType, string> = {
  face: FACE_VIEWBOX,
  dog: DOG_VIEWBOX,
  cat: CAT_VIEWBOX,
};

// Pivot point for idle animations per character
const ORIGINS: Record<CharacterType, string> = {
  face: '100px 110px',
  dog:  '100px 130px',
  cat:  '100px 120px',
};

export function CharacterSVG({ config, color, animated, size, character }: CharacterSVGProps) {
  const viewBox = VIEWBOXES[character];
  const origin = ORIGINS[character];

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', display: 'block' }}
    >
      <motion.g
        style={{ transformOrigin: origin }}
        animate={getIdleAnimate(config, animated)}
        transition={
          animated
            ? { duration: config.idleAnimation.duration || 3, repeat: Infinity, ease: 'easeInOut' }
            : undefined
        }
      >
        {character === 'face' && <FaceCharacter config={config} color={color} animated={animated} />}
        {character === 'dog'  && <DogCharacter  config={config} color={color} animated={animated} />}
        {character === 'cat'  && <CatCharacter  config={config} color={color} animated={animated} />}
      </motion.g>
    </svg>
  );
}
