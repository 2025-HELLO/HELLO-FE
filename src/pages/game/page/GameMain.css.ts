import { style } from '@vanilla-extract/css';

/* 페이지 래퍼 */
export const wrap = style({
  minHeight: '100vh',
  padding: '20px 0 32px', // ✅ 좌우 여백을 없애고
  display: 'grid',
  rowGap: 20,
  boxSizing: 'border-box',
  justifyItems: 'center', // ✅ 내부 컨텐츠를 모두 가운데 고정
});

/* 상단 연속 학습 카드 */
export const streakCard = style({
  background: '#5C84B9',
  color: '#fff',
  borderRadius: 20,
  padding: '16px 24px',
  minHeight: 120,
  width: '84%', // ✅ 전체폭 기준 동일폭
  maxWidth: 430, // 모바일 기준 최대폭 고정
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 14px rgba(0,0,0,0.08)',
});

export const streakText = style({
  fontSize: 18,
  lineHeight: 1.4,
  fontWeight: 700,
  whiteSpace: 'pre-line',
});

export const ringWrap = style({
  width: 90,
  height: 90,
  display: 'grid',
  placeItems: 'center',
});

/* 섹션 타이틀 */
export const sectionTitle = style({
  width: '84%', // ✅ 상단 카드와 동일 폭
  maxWidth: 430,
  fontSize: 18,
  fontWeight: 800,
  marginTop: 20,
});

/* === 오늘의 추천 게임: 1행 2열 ===
   두 열의 윗변/아랫변 일치 */
export const twoCols = style({
  width: '84%', // 상단 카드랑 동일
  //maxWidth: 430,
  display: 'grid',
  gridTemplateColumns: 'max-content max-content',
  columnGap: 40, // 열 사이 간격(원하면 더/덜)
  //justifyContent: 'center', // ✅ 두 열 묶음을 가운데로 모음 (← 핵심)
  alignItems: 'stretch',
});

/* 각 열: 위/아래 고정 */
export const col = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 1, // ✅ 세로 간격 좁힘 (기존 gap 없음 → 12)
});

/* SVG 버튼 = 이미지 자체를 클릭 */
export const imgButton = style({
  display: 'block',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
});

export const img = style({
  display: 'block',
  width: '114%', // ✅ 원본보다 약간 크게
  height: 'auto',
});
