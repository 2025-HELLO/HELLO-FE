import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/token/color.css.ts';
import { fonts } from '@/styles/token/typography.css.ts';

/** 피그마 느낌 살리기: 내부 폭(가로) 줄여 여백 확보 */
const INNER_W = '84%'; // ⬅️ 가로 더 좁힘
const PILL_H = 105; // 날씨/일정 높이 동일
const CHAT_MIN_H = 180; // 챗봇 카드 높이
const CARD_RADIUS = 30; // 피그마 라운드 30

export const container = style({
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  padding: '20px 0 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px', // ⬅️ 섹션 간 기본 간격 키움
  background: colors.white01,
  minHeight: 'calc(100dvh - 5rem)',
  boxSizing: 'border-box',
});

/* 날짜 & 인사 */
export const dateSection = style({
  width: INNER_W,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});
export const date = style({ ...fonts.body01, color: colors.black01 });
export const greeting = style({ ...fonts.body03, color: colors.grey07 });

/* 날씨 카드 (pill) */
export const weatherCard = style({
  width: INNER_W,
  margin: '0 auto',
  background: '#D7EDFF', // 밝은 하늘색
  borderRadius: `${CARD_RADIUS}px`,
  padding: '0 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: `${PILL_H}px`,
  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
});
export const weatherLeft = style({ display: 'flex', flexDirection: 'column', gap: '2px' });
export const city = style({ ...fonts.body02, color: colors.grey02 });
export const weather = style({ ...fonts.caption02, color: colors.grey06 });
export const tempWrap = style({ display: 'flex', alignItems: 'center', gap: '10px' });
export const thermo = style({ width: '22px', height: '22px' });
export const temp = style({ ...fonts.title03, color: colors.grey02 });

/* 챗봇 CTA (파란 카드 + 버튼) */
export const chatCta = style({
  width: INNER_W,
  margin: '0 auto',
  position: 'relative',
  background: colors.blue05, // 단색(토큰)
  borderRadius: `${CARD_RADIUS}px`,
  padding: '20px 18px',
  color: colors.white01,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: `${CHAT_MIN_H}px`,
  boxShadow: '0 14px 30px rgba(34, 86, 190, 0.22)',
  overflow: 'hidden',
  marginTop: '6px',
  marginBottom: '10px',
});
export const chatTexts = style({ display: 'flex', flexDirection: 'column', gap: '6px' });
export const chatTitle = style({
  ...fonts.title03,
  color: colors.white01,
  fontSize: '25px', // ⬅️ 피그마 지정값
  lineHeight: '1.2',
});
export const chatDesc = style({ ...fonts.caption02, opacity: 0.95 });

/* 버튼: 흰색 알약 */
export const chatButton = style({
  marginTop: '10px',
  alignSelf: 'flex-start',
  padding: '10px 16px',
  borderRadius: '999px',
  border: '1px solid rgba(255,255,255,0.85)',
  background: colors.white01,
  color: colors.grey02,
  ...fonts.body05,
  cursor: 'pointer',
  boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
  selectors: { '&:active': { transform: 'scale(0.98)' } },
});

/* 말풍선 아트: 우하단 고정 */
export const chatArt = style({
  width: '150px',
  height: 'auto',
  position: 'absolute',
  right: '8px',
  bottom: '2px',
  pointerEvents: 'none',
});

/* 2칸 그리드 (회상기록 / 게임) */
export const gridTwo = style({
  width: INNER_W,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px', // 카드끼리 더 띄움
});

/* 공통 타일 베이스 — 피그마 비율 159×138 ≈ 1:0.868 */
const tileBase = {
  position: 'relative' as const,
  borderRadius: `${CARD_RADIUS}px`,
  padding: '16px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
  border: 'none',
  overflow: 'hidden',
  aspectRatio: '1 / 0.868',
};

/* ⬅️ 요청대로 배경 토큰 변경 */
export const cardMemo = style({
  ...tileBase,
  background: colors.blue02, // 회상기록: blue02
  color: colors.grey02,
});

export const cardGame = style({
  ...tileBase,
  background: colors.yellow01, // 게임: yellow01
  color: colors.grey02,
});

/* 타일 내 텍스트: 좌상단 고정 */
export const cardTextBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  whiteSpace: 'pre-line', // \n 줄바꿈 적용
});
export const cardTitle = style({
  ...fonts.title04,
  color: colors.grey02,
  fontSize: '20px', // ⬅️ 피그마 지정값
  lineHeight: '1.25',
});
export const cardSub = style({ ...fonts.caption02, color: colors.grey06 });

/* 아이콘: 우하단 고정 (피그마 위치) */
export const cardArt = style({
  width: '64px',
  height: 'auto',
  position: 'absolute',
  right: '14px',
  bottom: '10px',
  pointerEvents: 'none',
});

/* 일정 카드: 날씨 카드와 동일 높이 */
export const scheduleCard = style({
  width: INNER_W,
  margin: '0 auto',
  background: '#EBF6FF',
  borderRadius: `${CARD_RADIUS}px`,
  padding: '0 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: `${PILL_H}px`,
  position: 'relative',
  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
  marginTop: '6px',
});
export const scheduleOverlay = style({
  position: 'absolute',
  inset: 0,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

/* (SVG 채움색 필요 시) */
export const menuSvg = style({ fill: '#4E8DFF' });
