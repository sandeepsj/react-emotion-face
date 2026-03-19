# react-emotion-face

Animated cartoon emotion faces for React — 21 emotions, 3 character types, speech bubbles, and idle animations powered by Framer Motion.

[![npm version](https://img.shields.io/npm/v/react-emotion-face)](https://www.npmjs.com/package/react-emotion-face)
[![license](https://img.shields.io/npm/l/react-emotion-face)](./LICENSE)

**[Live Demo →](https://sandeepsj.github.io/react-emotion-face/)**

---

## Features

- **21 emotions** — happy, sad, angry, mad, surprised, calm, sleepy, excited, tired, confused, embarrassed, nervous, proud, disgusted, bored, love, silly, determined, shy, anxious, laughing
- **3 character types** — 2D face (rounded rectangle), dog (floppy ears + snout), cat (pointy ears + whiskers)
- **Speech bubbles** — comic-book style with spring enter/exit animation
- **Idle animations** — bounce, breathe, pulse, tremble, wiggle, droop, headBob, and more
- **Framer Motion** path morphing for smooth expression transitions
- **TypeScript-first** — fully typed props and enums
- **Zero stylesheet dependency** — CSS is bundled, import once

---

## Installation

```bash
npm install react-emotion-face
```

Peer dependencies: `react >= 17`, `react-dom >= 17`

---

## Quick start

```tsx
import { EmotionFace } from 'react-emotion-face';
import 'react-emotion-face/styles';

export default function App() {
  return (
    <EmotionFace
      emotion="happy"
      character="dog"
      message="Woof! 🐾"
      size={200}
      animated={true}
    />
  );
}
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `emotion` | `Emotion` | — | **Required.** One of the 21 emotion values |
| `character` | `'face' \| 'dog' \| 'cat'` | `'face'` | Character shape |
| `message` | `string` | — | Speech bubble text (animates in/out) |
| `size` | `number` | `200` | Width and height in pixels |
| `animated` | `boolean` | `true` | Enable idle animations |
| `color` | `string` | emotion default | Override the skin/fur colour |
| `onEmotionChange` | `(e: Emotion) => void` | — | Called when `emotion` prop changes |

---

## Characters

### `face` — 2D Cartoon Face
Rounded-rectangle head with classic cartoon features. Default character.

### `dog`
Round head with floppy ears, a snout with a shiny nose, and the mouth positioned on the snout.

### `cat`
Round head with pointy triangular ears (pink inner ear highlight), a small triangular nose, and three whiskers on each side.

```tsx
<EmotionFace emotion="love" character="face" size={150} />
<EmotionFace emotion="love" character="dog"  size={150} />
<EmotionFace emotion="love" character="cat"  size={150} />
```

---

## Emotions

| Emotion | Eyes | Accessories | Animation |
|---|---|---|---|
| `happy` | Normal | — | Breathe |
| `sad` | Sad | Tears | Slow breathe |
| `angry` | Squint | Anger lines | Breathe |
| `mad` | Squint | Anger lines | Tremble |
| `surprised` | Wide | — | Head bob |
| `calm` | Closed | — | Breathe |
| `sleepy` | Sleepy | Floating Zs | Droop |
| `excited` | Wide | Sparkles | Bounce |
| `tired` | Sleepy | — | Slow breathe |
| `confused` | Normal | Question mark | Head bob |
| `embarrassed` | Closed | Blush | Breathe |
| `nervous` | Normal | Sweat drop | Tremble |
| `proud` | Normal | Sparkles | Breathe |
| `disgusted` | Squint | — | Breathe |
| `bored` | Sleepy | — | Slow breathe |
| `love` | Hearts | Floating hearts + blush | Pulse |
| `silly` | Normal | Tongue | Wiggle |
| `determined` | Squint | — | Breathe |
| `shy` | Closed | Blush | Breathe |
| `anxious` | Wide | Sweat drop | Tremble |
| `laughing` | Closed | Blush | Bounce |

---

## Utility functions

```ts
import { getEmotions, getCharacters, EMOTIONS, CHARACTERS } from 'react-emotion-face';

getEmotions();    // → ['happy', 'sad', 'angry', ...] (all 21)
getCharacters();  // → ['face', 'dog', 'cat']

EMOTIONS;         // same as getEmotions() but a static array
CHARACTERS;       // same as getCharacters() but a static array
```

---

## Speech bubble

Pass any string as `message` to show a comic-book speech bubble. Clears by passing `undefined` or an empty string.

```tsx
const [msg, setMsg] = useState('');

<EmotionFace emotion="calm" character="cat" message={msg || undefined} size={200} />
<input value={msg} onChange={e => setMsg(e.target.value)} placeholder="Say something..." />
```

---

## Custom colour

Each emotion ships with a default skin/fur colour. Override it with `color`:

```tsx
<EmotionFace emotion="happy" color="#FF6EB4" size={200} />  // pink
<EmotionFace emotion="angry" color="#6B4FFF" size={200} />  // purple
```

---

## Development

```bash
git clone https://github.com/sandeepsj/react-emotion-face.git
cd react-emotion-face
npm install

npm run dev          # demo dev server → http://localhost:5173/react-emotion-face/
npm run build:lib    # build library   → dist/
npm run build:demo   # build demo      → docs/
npm run build        # build both
```

---

## License

MIT © sandeepsj
