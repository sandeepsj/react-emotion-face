import React from 'react';
import { motion } from 'framer-motion';
import type { EmotionConfig } from '../types';
import { Eyes } from './Eyes';
import { Eyebrows } from './Eyebrows';
import { Mouth } from './Mouth';
import { Body } from './Body';
import { Accessories } from './Accessories';

interface CharacterSVGProps {
  config: EmotionConfig;
  color: string;
  animated: boolean;
  showBody: boolean;
  size: number;
}

function getAnimationClass(config: EmotionConfig, animated: boolean): string {
  if (!animated) return '';
  switch (config.idleAnimation.type) {
    case 'breathe': return 'ef-breathe';
    case 'slow-breathe': return 'ef-slow-breathe';
    case 'bounce': return 'ef-bounce';
    case 'droop': return 'ef-droop';
    case 'tremble': return 'ef-tremble';
    case 'wiggle': return 'ef-wiggle';
    case 'pulse': return 'ef-pulse';
    case 'headBob': return 'ef-headBob';
    default: return '';
  }
}

export function CharacterSVG({ config, color, animated, showBody, size }: CharacterSVGProps) {
  const animClass = getAnimationClass(config, animated);
  const viewBox = showBody ? '0 0 200 280' : '0 20 200 160';
  const svgHeight = showBody ? size : size * 0.8;

  return (
    <svg
      width={size}
      height={svgHeight}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', display: 'block' }}
    >
      <motion.g
        className={animClass}
        style={{ transformOrigin: '100px 140px' }}
        animate={
          animated && config.idleAnimation.type === 'breathe'
            ? { scale: [1, 1.015, 1] }
            : animated && config.idleAnimation.type === 'slow-breathe'
            ? { scale: [1, 1.01, 1] }
            : animated && config.idleAnimation.type === 'bounce'
            ? { y: [0, -12, -8, 0] }
            : animated && config.idleAnimation.type === 'pulse'
            ? { scale: [1, 1.06, 1] }
            : animated && config.idleAnimation.type === 'headBob'
            ? { y: [0, -4, -2, 0], rotate: [0, -2, 2, 0] }
            : undefined
        }
        transition={
          animated
            ? {
                duration: config.idleAnimation.duration || 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      >
        {/* Head */}
        <circle
          cx={100}
          cy={90}
          r={70}
          fill={color}
          stroke="#333"
          strokeWidth={3}
        />

        <Accessories config={config.accessories} animated={animated} />
        <Eyebrows shape={config.eyebrowShape} />
        <Eyes shape={config.eyeShape} animated={animated} />
        <Mouth shape={config.mouthShape} />

        {showBody && (
          <Body color={color} tilt={config.bodyTilt || 0} />
        )}
      </motion.g>
    </svg>
  );
}
