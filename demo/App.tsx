import React, { useState, useEffect } from 'react';
import { EmotionFace, EMOTIONS } from 'react-emotion-face';
import type { Emotion, CharacterType } from 'react-emotion-face';

// ─── Data ────────────────────────────────────────────────────────────────────

const EMOTION_COLORS: Record<Emotion, string> = {
  happy: '#FFD700', sad: '#87CEEB', angry: '#FF6B6B', mad: '#FF4500',
  surprised: '#FFE4B5', calm: '#98FB98', sleepy: '#B0C4DE', excited: '#FFA500',
  tired: '#C8C8C8', confused: '#DDA0DD', embarrassed: '#FFB6C1', nervous: '#F0E68C',
  proud: '#FFD700', disgusted: '#9ACD32', bored: '#AAAAAA', love: '#FF69B4',
  silly: '#7FFF00', determined: '#FF8C00', shy: '#FFB6C1', anxious: '#FFDAB9',
  laughing: '#FFE066',
};

const EMOTION_DESCRIPTIONS: Partial<Record<Emotion, string>> = {
  happy: 'Bright and cheerful ☀️', sad: 'Feeling blue… 💧',
  angry: 'Getting heated 🔥', mad: 'Full-on rage mode 💢',
  surprised: 'Didn\'t see that coming! 😲', calm: 'Zen and peaceful 🌿',
  sleepy: 'Zzz… 😴', excited: 'Can\'t contain the energy! ✨',
  tired: 'Absolutely exhausted 😮‍💨', confused: 'Wait, what? 🤔',
  embarrassed: 'Gone bright red 😳', nervous: 'Sweating bullets 😅',
  proud: 'Standing tall 🏆', disgusted: 'Absolutely not 🤢',
  bored: 'Nothing to see here 🥱', love: 'Heart eyes activated 💕',
  silly: 'Goofing around 😜', determined: 'Locked in 💪',
  shy: 'Hiding behind hands 🙈', anxious: 'Overthinking everything 😬',
  laughing: 'Can\'t stop laughing 😂',
};

const CHARACTERS: { type: CharacterType; label: string; description: string; defaultColor: string }[] = [
  { type: 'face', label: '2D Face', description: 'Classic cartoon', defaultColor: '#FFD700' },
  { type: 'dog',  label: 'Dog',     description: 'Floppy-eared pup', defaultColor: '#D2A679' },
  { type: 'cat',  label: 'Cat',     description: 'Whiskered feline', defaultColor: '#C8A0DC' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 99,
      background: '#ffffff14', border: '1px solid #ffffff22',
      color: '#aaa', fontSize: 12, letterSpacing: 0.4,
    }}>{children}</span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      color: '#555', fontSize: 11, fontWeight: 700,
      letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 14, textAlign: 'center',
    }}>{children}</p>
  );
}

function CharacterStage({
  character, emotion, message, active, onClick,
}: {
  character: CharacterType; emotion: Emotion; message: string;
  active: boolean; onClick: () => void;
}) {
  const meta = CHARACTERS.find(c => c.type === character)!;
  const color = EMOTION_COLORS[emotion];

  return (
    <button
      onClick={onClick}
      style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        padding: '24px 12px 18px',
        borderRadius: 20,
        border: `2px solid ${active ? color : '#2a2a4a'}`,
        background: active ? `${color}0e` : '#111827',
        cursor: 'pointer', transition: 'all 0.25s',
        boxShadow: active ? `0 0 28px ${color}33` : 'none',
        position: 'relative',
      }}
    >
      {active && (
        <span style={{
          position: 'absolute', top: 10, right: 12,
          background: color, color: '#111', borderRadius: 99,
          fontSize: 10, fontWeight: 700, padding: '2px 8px', letterSpacing: 0.5,
        }}>ACTIVE</span>
      )}
      <EmotionFace
        emotion={emotion}
        character={character}
        message={active ? (message || undefined) : undefined}
        size={clamp(180, 120, 220)}
        animated={active}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: active ? color : '#ccc', fontWeight: 700, fontSize: 15 }}>
          {meta.label}
        </div>
        <div style={{ color: '#555', fontSize: 12, marginTop: 2 }}>{meta.description}</div>
      </div>
    </button>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [emotion, setEmotion] = useState<Emotion>('happy');
  const [character, setCharacter] = useState<CharacterType>('face');
  const [message, setMessage] = useState('');
  const [autoCycle, setAutoCycle] = useState(false);

  useEffect(() => {
    if (!autoCycle) return;
    const idx = EMOTIONS.indexOf(emotion);
    const timer = setInterval(() => {
      setEmotion(EMOTIONS[(idx + 1) % EMOTIONS.length]);
    }, 2000);
    return () => clearInterval(timer);
  }, [autoCycle, emotion]);

  const accentColor = EMOTION_COLORS[emotion];

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a', color: '#e0e0e0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ── Hero / Header ──────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', padding: '52px 16px 36px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          <Badge>React 18</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Framer Motion</Badge>
          <Badge>21 emotions</Badge>
          <Badge>3 characters</Badge>
        </div>
        <h1 style={{
          fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 900, margin: '0 0 12px',
          background: `linear-gradient(110deg, #FFD700, ${accentColor}, #87CEEB)`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          transition: 'background 0.5s',
        }}>
          react-emotion-face
        </h1>
        <p style={{ color: '#666', fontSize: 16, maxWidth: 480, margin: '0 auto 20px' }}>
          Animated cartoon characters with expressive emotions, speech bubbles, and idle animations — for React.
        </p>
        <code style={{
          display: 'inline-block', background: '#1e1e2e', border: '1px solid #333',
          borderRadius: 8, padding: '8px 18px', fontSize: 14, color: '#7dd3fc',
          letterSpacing: 0.3,
        }}>
          npm install react-emotion-face
        </code>
      </div>

      {/* ── Character stage — all 3 side by side ───────────────────────── */}
      <div style={{ maxWidth: 860, margin: '0 auto 16px', padding: '0 16px' }}>
        <SectionLabel>Pick a character</SectionLabel>
        <div style={{ display: 'flex', gap: 14 }}>
          {CHARACTERS.map(({ type }) => (
            <CharacterStage
              key={type}
              character={type}
              emotion={emotion}
              message={message}
              active={character === type}
              onClick={() => setCharacter(type)}
            />
          ))}
        </div>
      </div>

      {/* ── Emotion label ──────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', padding: '4px 0 28px' }}>
        <span style={{
          fontSize: 28, fontWeight: 800, color: accentColor,
          textTransform: 'capitalize', letterSpacing: 0.5,
          transition: 'color 0.3s',
        }}>{emotion}</span>
        <p style={{ color: '#555', fontSize: 13, marginTop: 4 }}>
          {EMOTION_DESCRIPTIONS[emotion] ?? ''}
        </p>
      </div>

      {/* ── Controls row ───────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 560, margin: '0 auto 48px', padding: '0 16px',
        display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center',
      }}>
        {/* Speech bubble */}
        <div style={{ width: '100%' }}>
          <SectionLabel>Speech bubble</SectionLabel>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Say something as ${character}…`}
              style={{
                flex: 1, padding: '11px 15px', borderRadius: 12,
                border: `2px solid ${message ? accentColor + '88' : '#2a2a4a'}`,
                background: '#111827', color: '#e0e0e0', fontSize: 14, outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
            {message && (
              <button onClick={() => setMessage('')} style={{
                padding: '0 16px', borderRadius: 12, border: 'none',
                background: '#2a2a4a', color: '#888', cursor: 'pointer', fontSize: 16,
              }}>✕</button>
            )}
          </div>
        </div>

        {/* Auto-cycle */}
        <button
          onClick={() => setAutoCycle((v) => !v)}
          style={{
            padding: '10px 28px', borderRadius: 99,
            border: `2px solid ${autoCycle ? accentColor : '#2a2a4a'}`,
            background: autoCycle ? `${accentColor}1a` : 'transparent',
            color: autoCycle ? accentColor : '#666',
            cursor: 'pointer', fontSize: 13, fontWeight: 600, letterSpacing: 0.5,
            transition: 'all 0.2s',
          }}
        >
          {autoCycle ? '⏸ Stop cycling' : '▶ Auto-cycle emotions'}
        </button>
      </div>

      {/* ── Divider ────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #2a2a4a, transparent)', margin: '0 auto 48px', maxWidth: 760 }} />

      {/* ── Emotion grid ───────────────────────────────────────────────── */}
      <div style={{ maxWidth: 820, margin: '0 auto 56px', padding: '0 16px' }}>
        <SectionLabel>All 21 emotions — {CHARACTERS.find(c => c.type === character)?.label}</SectionLabel>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: 10,
        }}>
          {EMOTIONS.map((e) => {
            const active = emotion === e;
            const col = EMOTION_COLORS[e];
            return (
              <button
                key={e}
                onClick={() => setEmotion(e)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                  padding: '12px 6px 10px',
                  borderRadius: 14,
                  border: `2px solid ${active ? col : '#1e1e30'}`,
                  background: active ? `${col}15` : '#111827',
                  cursor: 'pointer', transition: 'all 0.18s',
                  boxShadow: active ? `0 0 14px ${col}33` : 'none',
                }}
              >
                <EmotionFace emotion={e} character={character} size={64} animated={active} />
                <span style={{
                  color: active ? col : '#555', fontSize: 10.5,
                  fontWeight: active ? 700 : 400,
                  textTransform: 'capitalize', letterSpacing: 0.2,
                }}>{e}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Divider ────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #2a2a4a, transparent)', margin: '0 auto 48px', maxWidth: 760 }} />

      {/* ── API reference ──────────────────────────────────────────────── */}
      <div style={{ maxWidth: 720, margin: '0 auto 56px', padding: '0 16px' }}>
        <SectionLabel>API reference</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
          {[
            { prop: 'emotion', type: 'Emotion', desc: '21 emotion values' },
            { prop: 'character', type: "'face' | 'dog' | 'cat'", desc: 'Character shape (default: face)' },
            { prop: 'message', type: 'string', desc: 'Speech bubble text (optional)' },
            { prop: 'size', type: 'number', desc: 'Width/height in px (default: 200)' },
            { prop: 'animated', type: 'boolean', desc: 'Enable idle animations (default: true)' },
            { prop: 'color', type: 'string', desc: 'Override skin/fur colour' },
          ].map(({ prop, type, desc }) => (
            <div key={prop} style={{
              background: '#111827', border: '1px solid #1e1e30',
              borderRadius: 12, padding: '14px 16px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                <code style={{ color: '#7dd3fc', fontWeight: 700, fontSize: 13 }}>{prop}</code>
                <code style={{ color: '#a78bfa', fontSize: 11 }}>{type}</code>
              </div>
              <p style={{ color: '#556', fontSize: 12, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Live code snippet ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 620, margin: '0 auto 56px', padding: '0 16px' }}>
        <SectionLabel>Live code</SectionLabel>
        <div style={{
          background: '#0d1117', border: '1px solid #30363d',
          borderRadius: 14, padding: '20px 24px', position: 'relative',
        }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            {['#FF5F57', '#FFBD2E', '#28CA42'].map(c => (
              <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <pre style={{ color: '#e0e0e0', fontSize: 13, lineHeight: 1.7, margin: 0, overflow: 'auto' }}>
{`import { EmotionFace } from 'react-emotion-face';
import 'react-emotion-face/styles';

<EmotionFace
  emotion=`}<span style={{ color: '#7dd3fc' }}>"{emotion}"</span>{`
  character=`}<span style={{ color: '#7dd3fc' }}>"{character}"</span>{message ? `\n  message=` : ''}{message ? <span style={{ color: '#7dd3fc' }}>"{message}"</span> : ''}{`
  size={200}
  animated={true}
/>`}
          </pre>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer style={{ textAlign: 'center', padding: '24px 16px 40px', borderTop: '1px solid #1a1a2a' }}>
        <p style={{ color: '#333', fontSize: 12, margin: 0 }}>
          Built with React 18 · TypeScript · Framer Motion &nbsp;·&nbsp;
          <a href="https://github.com/sandeepsj/react-emotion-face" style={{ color: '#444', textDecoration: 'none' }}>
            GitHub ↗
          </a>
          &nbsp;·&nbsp;
          <a href="https://www.npmjs.com/package/react-emotion-face" style={{ color: '#444', textDecoration: 'none' }}>
            npm ↗
          </a>
        </p>
      </footer>
    </div>
  );
}
