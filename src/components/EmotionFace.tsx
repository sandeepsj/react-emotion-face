import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { EmotionFaceProps } from '../types';
import { emotionConfigs } from '../data/emotions';
import { CharacterSVG } from './CharacterSVG';
import { SpeechBubble } from './SpeechBubble';
import '../styles/animations.css';

export function EmotionFace({
  emotion,
  message,
  size = 200,
  animated = true,
  color,
  character = 'face',
  onEmotionChange,
}: EmotionFaceProps) {
  const config = emotionConfigs[emotion];
  const skinColor = color || config.skinColor || '#FFD700';

  React.useEffect(() => {
    onEmotionChange?.(emotion);
  }, [emotion, onEmotionChange]);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: size,
      }}
    >
      <CharacterSVG
        config={config}
        color={skinColor}
        animated={animated}
        size={size}
        character={character}
      />
      <AnimatePresence>
        {message && (
          <SpeechBubble
            key="bubble"
            message={message}
            size={size}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
