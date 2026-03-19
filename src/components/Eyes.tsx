import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { EyeShape } from '../types';

interface EyesProps {
  shape: EyeShape;
  animated: boolean;
}

function NormalEye({ cx, cy, animated }: { cx: number; cy: number; animated: boolean }) {
  return (
    <g className={animated ? 'ef-eye-blink' : ''} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <ellipse cx={cx} cy={cy} rx={9} ry={11} fill="#333" />
      <circle cx={cx + 3} cy={cy - 3} r={2.5} fill="white" />
    </g>
  );
}

function SleepyEye({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy + 2} rx={10} ry={5} fill="#333" />
      <line x1={cx - 10} y1={cy - 3} x2={cx + 10} y2={cy - 3} stroke="#333" strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

function SurprisedEye({ cx, cy, animated }: { cx: number; cy: number; animated: boolean }) {
  return (
    <g className={animated ? 'ef-eye-blink' : ''} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r={13} fill="#333" />
      <circle cx={cx + 4} cy={cy - 4} r={3.5} fill="white" />
    </g>
  );
}

function SadEye({ cx, cy, animated }: { cx: number; cy: number; animated: boolean }) {
  return (
    <g className={animated ? 'ef-eye-blink' : ''} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <ellipse cx={cx} cy={cy + 2} rx={9} ry={10} fill="#333" />
      <circle cx={cx + 3} cy={cy - 2} r={2} fill="white" />
    </g>
  );
}

function HeartEye({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <path
        d={`M ${cx} ${cy + 6} C ${cx - 10} ${cy - 2} ${cx - 14} ${cy + 8} ${cx} ${cy + 14} C ${cx + 14} ${cy + 8} ${cx + 10} ${cy - 2} ${cx} ${cy + 6} Z`}
        fill="#FF4D6D"
        transform={`translate(0, -8)`}
      />
    </g>
  );
}

function ClosedEye({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <path
        d={`M ${cx - 10} ${cy} Q ${cx} ${cy - 6} ${cx + 10} ${cy}`}
        stroke="#333"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

function SquintEye({ cx, cy, animated }: { cx: number; cy: number; animated: boolean }) {
  return (
    <g className={animated ? 'ef-eye-blink' : ''} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <ellipse cx={cx} cy={cy + 3} rx={9} ry={6} fill="#333" />
      <line x1={cx - 9} y1={cy - 3} x2={cx + 9} y2={cy - 3} stroke="#333" strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

function WideEye({ cx, cy, animated }: { cx: number; cy: number; animated: boolean }) {
  return (
    <g className={animated ? 'ef-eye-blink' : ''} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r={12} fill="white" stroke="#333" strokeWidth={2} />
      <circle cx={cx} cy={cy} r={8} fill="#333" />
      <circle cx={cx + 3} cy={cy - 3} r={2.5} fill="white" />
    </g>
  );
}

export function Eyes({ shape, animated }: EyesProps) {
  const positions = [
    { cx: 72, cy: 82 },
    { cx: 128, cy: 82 },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.g
        key={shape}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {positions.map(({ cx, cy }, i) => {
          switch (shape) {
            case 'sleepy':
              return <SleepyEye key={i} cx={cx} cy={cy} />;
            case 'surprised':
              return <SurprisedEye key={i} cx={cx} cy={cy} animated={animated} />;
            case 'sad':
              return <SadEye key={i} cx={cx} cy={cy} animated={animated} />;
            case 'heart':
              return <HeartEye key={i} cx={cx} cy={cy} />;
            case 'closed':
              return <ClosedEye key={i} cx={cx} cy={cy} />;
            case 'squint':
              return <SquintEye key={i} cx={cx} cy={cy} animated={animated} />;
            case 'wide':
              return <WideEye key={i} cx={cx} cy={cy} animated={animated} />;
            default:
              return <NormalEye key={i} cx={cx} cy={cy} animated={animated} />;
          }
        })}
      </motion.g>
    </AnimatePresence>
  );
}
