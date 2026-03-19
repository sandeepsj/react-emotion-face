import React from 'react';
import { motion } from 'framer-motion';

interface SpeechBubbleProps {
  message: string;
  size: number;
}

export function SpeechBubble({ message, size }: SpeechBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        position: 'absolute',
        top: -size * 0.25,
        right: -size * 0.7,
        background: 'white',
        border: '2.5px solid #333',
        borderRadius: 14,
        padding: '8px 12px',
        maxWidth: size * 1.2,
        minWidth: 80,
        fontSize: Math.max(11, size * 0.09),
        fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
        fontWeight: 'bold',
        color: '#222',
        zIndex: 10,
        lineHeight: 1.3,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {message}
      {/* Tail outer (border color) */}
      <div
        style={{
          position: 'absolute',
          bottom: -16,
          left: 18,
          width: 0,
          height: 0,
          borderLeft: '15px solid transparent',
          borderRight: '0px solid transparent',
          borderTop: '16px solid #333',
        }}
      />
      {/* Tail inner (white fill) */}
      <div
        style={{
          position: 'absolute',
          bottom: -12,
          left: 20,
          width: 0,
          height: 0,
          borderLeft: '12px solid transparent',
          borderRight: '0px solid transparent',
          borderTop: '13px solid white',
        }}
      />
    </motion.div>
  );
}
