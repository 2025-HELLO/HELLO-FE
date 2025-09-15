// src/pages/game/GameResults.css.ts
import { style } from '@vanilla-extract/css';

//  색상 팔레트
const bgBox = '#F6F9FE'; // 제목 박스 & 표 배경
const pillBlue = '#005BBF'; // 시간 알약 색
const btnBlue = '#A4D5FF'; // 게임 시작 버튼

export const wrap = style({
  minHeight: '100vh',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 16px',
  gap: '24px',
});

/* 상단 제목 박스 */
export const titleBox = style({
  width: 325,
  height: 84,
  background: bgBox,
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
});

export const titleText = style({
  fontSize: 20,
  fontWeight: 700,
  color: '#000',
  textAlign: 'center',
});

/* 결과 표 */
export const listBox = style({
  width: 325,
  background: bgBox,
  borderRadius: 20,
  padding: '12px 0',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  borderBottom: '1px solid rgba(0,0,0,0.06)',
  selectors: {
    '&:last-child': { borderBottom: 'none' },
  },
});

export const rank = style({
  width: 40,
  fontSize: 16,
  fontWeight: 500,
  color: '#333',
});

export const name = style({
  flex: 1,
  fontSize: 18,
  fontWeight: 500,
  color: '#333',
});

export const timePill = style({
  minWidth: 74,
  padding: '8px 14px',
  borderRadius: 999,
  background: pillBlue,
  color: '#fff',
  fontSize: 16,
  fontWeight: 500,
  textAlign: 'center',
});

/* 게임 시작 버튼 */
export const startBtn = style({
  width: 260, // 표(325)보다 작게
  height: 45,
  border: 'none',
  borderRadius: 16,
  background: btnBlue,
  color: '#000',
  fontSize: 18,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  transition: 'transform .05s ease, filter .15s ease',
  selectors: {
    '&:hover': { filter: 'brightness(1.05)' },
    '&:active': { transform: 'translateY(1px)' },
  },
});
