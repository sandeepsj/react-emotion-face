# react-emotion-face

Animated cartoon emotion face React component library. 
A cute, highly-customizable SVG character face that displays various emotions with fluid animations!

## Installation

```bash
npm i react-emotion-face
```

## Usage

```tsx
import React, { useState } from 'react';
import { EmotionFace } from 'react-emotion-face';

function App() {
  const [emotion, setEmotion] = useState('Happy');

  return (
    <div>
      <EmotionFace 
        emotion={emotion} 
        size={250} 
        animated={true} 
        message="Hello world!"
      />
      
      <button onClick={() => setEmotion('Sad')}>Make Sad</button>
      <button onClick={() => setEmotion('Excited')}>Make Excited</button>
      <button onClick={() => setEmotion('Angry')}>Make Angry</button>
    </div>
  );
}
```

## Props

- `emotion` (string) - The emotion to display (e.g., 'Happy', 'Sad', 'Angry', 'Surprised', 'Love', 'Tired', etc.)
- `message` (string) - Optional text to display in a speech bubble above the face.
- `size` (number) - Width and height of the component (default: 200).
- `animated` (boolean) - Whether to play the idle animations matching each emotion (default: true).
- `color` (string) - Optional hex color code to override the default skin color for the face.
- `onEmotionChange` (function) - Callback `(emotion: string) => void` fired when the emotion state is applied inside the component.

## Emotion Types
This library includes over 20 pre-configured emotions: Happy, Sad, Angry, Mad, Surprised, Calm, Sleepy, Excited, Tired, Confused, Embarrassed, Nervous, Proud, Disgusted, Bored, Love, Silly, Sick, Scared, Furious, Shocked. Provide any corresponding key to switch the face seamlessly!
