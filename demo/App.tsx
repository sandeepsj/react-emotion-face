import React, { useState, useEffect } from 'react';
import { EmotionFace, EMOTIONS } from 'react-emotion-face';
import type { Emotion } from 'react-emotion-face';

const EMOTION_COLORS: Record<Emotion, string> = {
  happy: '#FFD700',
  sad: '#87CEEB',
  angry: '#FF6B6B',
  mad: '#FF4500',
  surprised: '#FFE4B5',
  calm: '#98FB98',
  sleepy: '#B0C4DE',
  excited: '#FFA500',
  tired: '#D3D3D3',
  confused: '#DDA0DD',
  embarrassed: '#FFB6C1',
  nervous: '#F0E68C',
  proud: '#FFD700',
  disgusted: '#9ACD32',
  bored: '#C0C0C0',
  love: '#FF69B4',
  silly: '#7FFF00',
  determined: '#FF8C00',
  shy: '#FFB6C1',
  anxious: '#FFDAB9',
};

export default function App() {
  const [emotion, setEmotion] = useState<Emotion>('happy');
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

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a2e', padding: '24px 16px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{
          fontSize: 32,
          fontWeight: 800,
          background: 'linear-gradient(90deg, #FFD700, #FF69B4, #87CEEB)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 8,
        }}>
          react-emotion-face
        </h1>
        <p style={{ color: '#999', fontSize: 15 }}>
          Animated cartoon emotion faces for React — 20 emotions, speech bubbles, Framer Motion
        </p>
      </div>

      {/* Main preview */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        marginBottom: 40,
      }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', paddingRight: 80 }}>
          <EmotionFace
            emotion={emotion}
            message={message || undefined}
            size={260}
            animated={true}
            showBody={true}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 26,
            fontWeight: 700,
            color: EMOTION_COLORS[emotion],
            textTransform: 'capitalize',
            letterSpacing: 1,
            marginBottom: 4,
          }}>
            {emotion}
          </h2>
          <p style={{ color: '#666', fontSize: 13 }}>Current emotion</p>
        </div>

        {/* Speech bubble input */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '100%', maxWidth: 400 }}>
          <label style={{ color: '#aaa', fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}>
            SPEECH BUBBLE
          </label>
          <div style={{ display: 'flex', gap: 8, width: '100%' }}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What should the character say?"
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: 10,
                border: '2px solid #444',
                background: '#16213e',
                color: '#e0e0e0',
                fontSize: 14,
                outline: 'none',
              }}
            />
            {message && (
              <button
                onClick={() => setMessage('')}
                style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  border: 'none',
                  background: '#444',
                  color: '#ccc',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >✕</button>
            )}
          </div>
        </div>

        {/* Auto cycle */}
        <button
          onClick={() => setAutoCycle((v) => !v)}
          style={{
            padding: '10px 24px',
            borderRadius: 20,
            border: '2px solid ' + (autoCycle ? '#FFD700' : '#555'),
            background: autoCycle ? '#FFD70022' : 'transparent',
            color: autoCycle ? '#FFD700' : '#aaa',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.5,
            transition: 'all 0.2s',
          }}
        >
          {autoCycle ? '⏸ Stop cycling' : '▶ Auto-cycle emotions'}
        </button>
      </div>

      {/* Emotion grid */}
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h3 style={{ color: '#888', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, textAlign: 'center' }}>
          All 20 Emotions
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 12,
        }}>
          {EMOTIONS.map((e) => (
            <button
              key={e}
              onClick={() => setEmotion(e)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: '12px 8px',
                borderRadius: 14,
                border: '2px solid ' + (emotion === e ? EMOTION_COLORS[e] : '#2a2a4a'),
                background: emotion === e ? EMOTION_COLORS[e] + '18' : '#16213e',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: emotion === e ? `0 0 12px ${EMOTION_COLORS[e]}44` : 'none',
              }}
            >
              <EmotionFace
                emotion={e}
                size={64}
                animated={emotion === e}
                showBody={false}
              />
              <span style={{
                color: emotion === e ? EMOTION_COLORS[e] : '#aaa',
                fontSize: 11,
                fontWeight: emotion === e ? 700 : 400,
                textTransform: 'capitalize',
                letterSpacing: 0.3,
              }}>
                {e}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Usage code */}
      <div style={{ maxWidth: 600, margin: '48px auto 0', padding: '20px 24px', background: '#0d1117', borderRadius: 14, border: '1px solid #30363d' }}>
        <p style={{ color: '#888', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
          Usage
        </p>
        <pre style={{ color: '#e0e0e0', fontSize: 13, lineHeight: 1.6, overflow: 'auto' }}>
{`import { EmotionFace } from 'react-emotion-face';
import 'react-emotion-face/styles';

<EmotionFace
  emotion="${emotion}"${message ? `\n  message="${message}"` : ''}
  size={200}
  animated={true}
  showBody={true}
/>`}
        </pre>
      </div>

      <p style={{ textAlign: 'center', color: '#444', fontSize: 12, marginTop: 40, paddingBottom: 24 }}>
        Built with React 18 + TypeScript + Framer Motion
      </p>
    </div>
  );
}
