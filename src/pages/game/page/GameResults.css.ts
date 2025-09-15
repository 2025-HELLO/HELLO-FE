// src/pages/game/GameResults.css.ts
import { style } from '@vanilla-extract/css';

export const wrap = style({
  minHeight: '100dvh',
  color: '#fff',
  background:
    'linear-gradient(180deg, rgba(22,24,35,1) 0%, rgba(30,32,45,1) 60%, rgba(24,26,36,1) 100%)',
  padding: '20px 16px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const header = style({
  display: 'grid',
  gridTemplateColumns: '40px 1fr 40px',
  alignItems: 'center',
});

export const backBtn = style({
  width: 32,
  height: 32,
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'transparent',
  color: '#fff',
  cursor: 'pointer',
});

export const title = style({
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 800,
  letterSpacing: 0.2,
});

export const spacer = style({});

export const cards = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 12,
});

export const card = style({
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 16,
  padding: '14px 12px',
  textAlign: 'center',
});

export const cardLabel = style({
  fontSize: 12,
  opacity: 0.8,
  marginBottom: 6,
});

export const cardValue = style({
  fontSize: 18,
  fontWeight: 800,
});

export const actions = style({
  marginTop: 'auto',
  display: 'grid',
  gap: 10,
});

export const primary = style({
  height: 44,
  borderRadius: 12,
  border: 'none',
  background: '#6C7CFF',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
});

export const ghost = style({
  height: 44,
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.25)',
  background: 'transparent',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
});
