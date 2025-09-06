import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/token/color.css.ts';
import { fonts } from '@/styles/token/typography.css.ts';

export const container = style({
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  padding: '20px 16px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  background: colors.white01,
  minHeight: 'calc(100dvh - 5rem)',
  boxSizing: 'border-box',
});

/* 날짜 & 인사 */
export const dateSection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const date = style({
  ...fonts.body01,
  color: colors.black01,
});

export const greeting = style({
  ...fonts.body03,
  color: colors.grey07,
});

/* 날씨 카드 - 연한 하늘색, 양끝 분배 */
export const weatherCard = style({
  width: '100%',
  background: '#E8F3FF',
  borderRadius: '16px',
  padding: '14px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
});

export const weatherLeft = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const city = style({
  ...fonts.body02,
  color: colors.grey02,
});

export const weather = style({
  ...fonts.caption02,
  color: colors.grey06,
});

export const tempWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const thermo = style({
  width: '22px',
  height: '22px',
});

export const temp = style({
  ...fonts.subtitle04,
  color: colors.grey02,
});

/* 챗봇 CTA - 파란 풀폭 카드 */
export const chatCta = style({
  position: 'relative',
  width: '100%',
  background: '#4E8DFF',
  borderRadius: '20px',
  padding: '18px 16px',
  overflow: 'hidden',
  color: colors.white01,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '120px',
  boxShadow: '0 10px 24px rgba(0,0,0,0.12)',
});

export const chatTexts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const chatTitle = style({
  ...fonts.title03,
  color: colors.white01,
});

export const chatDesc = style({
  ...fonts.caption02,
  opacity: 0.9,
});

export const chatButton = style({
  marginTop: '8px',
  padding: '8px 12px',
  borderRadius: '999px',
  border: 'none',
  background: colors.white01,
  color: colors.grey02,
  ...fonts.body05,
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  selectors: {
    '&:active': { transform: 'scale(0.98)' },
  },
});

export const chatArt = style({
  width: '120px',
  height: 'auto',
  transform: 'translateY(4px)',
  pointerEvents: 'none',
});

/* 두 칸 그리드 */
export const gridTwo = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '12px',
});

/* 공통 카드 베이스 */
const cardBase = {
  position: 'relative' as const,
  borderRadius: '16px',
  padding: '14px 14px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '110px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  cursor: 'pointer',
  border: 'none',
};

/* 회상기록 카드 - 연한 파랑 */
export const cardMemo = style({
  ...cardBase,
  background: '#EAF2FF',
  color: colors.grey02,
});

/* 게임 카드 - 연한 노랑 */
export const cardGame = style({
  ...cardBase,
  background: '#FFF7D9',
  color: colors.grey02,
});

/* 일정 카드 - 풀폭, 연한 하늘색 */
export const scheduleCard = style({
  width: '100%',
  background: '#EAF4FF',
  borderRadius: '16px',
  padding: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '96px',
  position: 'relative',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
});

export const scheduleOverlay = style({
  position: 'absolute',
  inset: 0,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

/* 카드 공통 텍스트/이미지 */
export const cardTextBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  whiteSpace: 'pre-line',
});

export const cardTitle = style({
  ...fonts.title05,
  color: colors.grey02,
});

export const cardSub = style({
  ...fonts.caption02,
  color: colors.grey06,
});

export const cardArt = style({
  width: '64px',
  height: 'auto',
  pointerEvents: 'none',
});

/* (SVG 아이콘 채움색이 필요하면 이 클래스 사용) */
export const menuSvg = style({
  fill: '#4E8DFF',
});
