export type Emotion =
  | 'happy'
  | 'sad'
  | 'angry'
  | 'mad'
  | 'surprised'
  | 'calm'
  | 'sleepy'
  | 'excited'
  | 'tired'
  | 'confused'
  | 'embarrassed'
  | 'nervous'
  | 'proud'
  | 'disgusted'
  | 'bored'
  | 'love'
  | 'silly'
  | 'determined'
  | 'shy'
  | 'anxious'
  | 'laughing';

export const EMOTIONS: Emotion[] = [
  'happy', 'sad', 'angry', 'mad', 'surprised', 'calm', 'sleepy', 'excited',
  'tired', 'confused', 'embarrassed', 'nervous', 'proud', 'disgusted',
  'bored', 'love', 'silly', 'determined', 'shy', 'anxious', 'laughing',
];

/** Returns all available emotion strings. */
export function getEmotions(): Emotion[] {
  return EMOTIONS;
}

export type EyeShape = 'normal' | 'sleepy' | 'surprised' | 'sad' | 'heart' | 'closed' | 'squint' | 'wide';
export type EyebrowShape = 'normal' | 'raised' | 'furrowed' | 'sad' | 'lifted' | 'flat' | 'asymmetric';
export type MouthShape =
  | 'smile'
  | 'frown'
  | 'surprised-o'
  | 'angry'
  | 'flat'
  | 'excited-open'
  | 'silly'
  | 'smirk'
  | 'tight'
  | 'zigzag'
  | 'laugh';

export type IdleAnimationType =
  | 'breathe'
  | 'slow-breathe'
  | 'bounce'
  | 'droop'
  | 'tremble'
  | 'wiggle'
  | 'pulse'
  | 'headBob'
  | 'none';

export interface IdleAnimationConfig {
  type: IdleAnimationType;
  duration?: number;
}

export interface AccessoryConfig {
  blush?: boolean;
  tears?: boolean;
  zFloating?: boolean;
  heartsFloating?: boolean;
  sweatDrop?: boolean;
  sparkles?: boolean;
  angerLines?: boolean;
  tongue?: boolean;
  questionMark?: boolean;
}

export interface EmotionConfig {
  eyeShape: EyeShape;
  eyebrowShape: EyebrowShape;
  mouthShape: MouthShape;
  idleAnimation: IdleAnimationConfig;
  accessories: AccessoryConfig;
  bodyTilt?: number;
  skinColor?: string;
}

export interface EmotionFaceProps {
  emotion: Emotion;
  message?: string;
  size?: number;
  animated?: boolean;
  color?: string;
  onEmotionChange?: (emotion: Emotion) => void;
}
