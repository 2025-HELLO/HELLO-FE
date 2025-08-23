import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/token/color.css';

/* 전체 */
export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: colors.white01,
});

/* 상단 날짜 헤더 */
export const header = style({
  borderBottom: `1px solid ${colors.grey10}`,
  padding: '0.8rem 1.2rem',
});
export const headerInner = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.8rem',
});
export const headerDateBig = style({
  fontSize: '3.2rem',
  fontWeight: 700,
  lineHeight: 1.1,
  color: colors.black01,
});
export const headerDateMeta = style({
  display: 'flex',
  flexDirection: 'column',
});
export const headerDow = style({
  fontSize: '1.2rem',
  color: colors.grey06,
});
export const headerYearMonth = style({
  fontSize: '1.2rem',
  color: colors.grey06,
});

/* 주간 스트립 */
export const weekStrip = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '0.4rem',
  padding: '0.8rem 1.2rem',
  borderBottom: `1px solid ${colors.grey10}`,
});
export const dayBox = style({
  display: 'grid',
  placeItems: 'center',
  gap: '0.2rem',
  padding: '0.6rem 0',
  borderRadius: '0.6rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  selectors: { '&:hover': { background: colors.grey11 } },
});
export const dayBoxActive = style({
  background: colors.blue01,
  boxShadow: `inset 0 0 0 1px ${colors.blue03}`,
});
export const dayBoxToday = style({
  background: colors.blue03, // 오늘 파란색
  boxShadow: `inset 0 0 0 1px ${colors.blue03}`,
});
export const dayDow = style({
  fontSize: '1.1rem',
  color: colors.grey06,
});
export const dayDate = style({
  fontSize: '1.6rem',
  fontWeight: 700,
  color: colors.black01,
});
export const dayTextToday = style({
  color: colors.white01, // 오늘일 때 텍스트 색
});

/* 타임라인 헤더 (시간 | 일정) */
export const timelineHeader = style({
  display: 'grid',
  gridTemplateColumns: '9.5rem 1fr',
  padding: '1rem 1.2rem 0.4rem',
  color: colors.grey06,
  fontSize: '1.2rem',
});
export const tlLabelTime = style({ justifySelf: 'start' });
export const tlLabelEvent = style({ justifySelf: 'start' });

/* 타임라인 리스트 */
export const timelineList = style({
  flex: 1,
  overflowY: 'auto',
  padding: '0.6rem 1.2rem 2rem',
});
export const tlRow = style({
  display: 'grid',
  // 왼쪽 9.5rem | 세로줄 1px | 오른쪽 카드
  gridTemplateColumns: '9.5rem 1px 1fr',
  alignItems: 'start',
  columnGap: '1.2rem',
  padding: '1rem 0',
});

/* 왼쪽 컬럼 */
export const timeCol = style({
  display: 'grid',
  gridTemplateRows: 'auto auto auto',
  rowGap: '0.4rem',
  justifyItems: 'start',
});
export const timeText = style({
  fontSize: '1.4rem',
  fontWeight: 700,
  color: colors.black01,
});
export const timeYmd = style({
  fontSize: '1.1rem',
  color: colors.grey06,
});
export const timeMarks = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

/* 세로 구분선 */
export const vDivider = style({
  width: '1px',
  height: '100%',
  background: colors.grey10,
  alignSelf: 'stretch',
});

/* 오른쪽 카드 컬럼 */
export const cardsCol = style({
  display: 'grid',
  gap: '0.8rem',
});

/* 카드 */
export const card = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  borderRadius: '1.2rem',
  background: colors.grey11,
  border: `1px solid ${colors.grey10}`,
  padding: '1.2rem',
});
export const cardEmph = style({
  background: colors.blue02,
  borderColor: colors.blue03,
});
export const cardInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
});
export const cardTitle = style({
  fontSize: '1.4rem',
  fontWeight: 700,
  color: colors.black01,
});
export const cardPlace = style({
  fontSize: '1.2rem',
  color: colors.grey06,
});
export const cardNote = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginTop: '0.4rem',
  fontSize: '1.15rem',
  color: colors.grey06,
});
export const noteDot = style({
  width: '0.6rem',
  height: '0.6rem',
  borderRadius: '50%',
  background: colors.grey08,
});
export const cardMore = style({
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '0.6rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
});

import { globalStyle } from '@vanilla-extract/css';

// ... 생략 ...

/* 체크 전체 영역 */
export const checkboxWrap = style({
  position: 'relative',
  width: '1.8rem',
  height: '1.8rem',
  display: 'inline-block',
  cursor: 'pointer',
});

/* 숨겨진 input (상태는 이게 가짐) */
export const checkInput = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  margin: 0,
  opacity: 0,
  cursor: 'pointer',
});

/* 네모박스 아이콘 (항상 보임) */
export const checkRect = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  display: 'block',
  pointerEvents: 'none',
});

/* 검정색 틱 (기본은 숨김) */
export const checkTick = style({
  position: 'absolute',
  left: '0.55rem',
  top: '0.25rem',
  width: '0.6rem',
  height: '1.0rem',
  border: 'solid black',
  borderWidth: '0 0.22rem 0.22rem 0',
  transform: 'rotate(45deg)',
  opacity: 0, // 기본 숨김
  transition: 'opacity 120ms ease',
  pointerEvents: 'none',
});

/* ✅ 체크되면 틱 보이게 (input:checked ~ tick) */
globalStyle(`${checkInput}:checked ~ ${checkTick}`, {
  opacity: 1,
});

/* 빈 상태 */
export const empty = style({
  textAlign: 'center',
  color: colors.grey06,
  padding: '3rem 0',
  fontSize: '1.4rem',
});
