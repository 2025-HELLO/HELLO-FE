import { style } from '@vanilla-extract/css';

const c = {
  bg: '#FFFFFF',
  text: '#121212',
  sub: '#5A5E66',
  border: '#E8EAED',
  divider: '#F2F3F5',
  primary: '#4F86FF',
  primarySoft: 'rgba(79,134,255,0.18)',
  chip: '#F6F7FA',
  card: '#F7F8FA',
  check: '#2B7A0B',
};

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: c.bg,
});

export const header = style({
  borderBottom: `1px solid ${c.border}`,
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
  color: c.text,
});
export const headerDateMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});
export const headerDow = style({
  fontSize: '1.2rem',
  color: c.sub,
});
export const headerYearMonth = style({
  fontSize: '1.2rem',
  color: c.sub,
});

export const weekStrip = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '0.4rem',
  padding: '0.8rem 1.2rem',
  borderBottom: `1px solid ${c.border}`,
});

export const dayBox = style({
  display: 'grid',
  placeItems: 'center',
  gap: '0.2rem',
  padding: '0.6rem 0',
  borderRadius: '0.6rem',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  selectors: {
    '&:hover': { background: c.chip },
  },
});
export const dayBoxActive = style({
  background: c.primarySoft,
  boxShadow: `inset 0 0 0 1px ${c.primary}`,
});
export const dayBoxToday = style({
  outline: `2px solid ${c.primary}`,
  outlineOffset: '-2px',
});
export const dayDow = style({
  fontSize: '1.1rem',
  color: c.sub,
});
export const dayDate = style({
  fontSize: '1.6rem',
  fontWeight: 700,
  color: c.text,
});

export const listSection = style({
  flex: 1,
  overflowY: 'auto',
  padding: '1rem 1.2rem 2rem',
  background: c.bg,
});

export const empty = style({
  textAlign: 'center',
  color: c.sub,
  padding: '3rem 0',
  fontSize: '1.4rem',
});

export const row = style({
  display: 'grid',
  gridTemplateColumns: '8.5rem 1fr',
  alignItems: 'start',
  gap: '1rem',
  padding: '1.2rem 0',
  borderBottom: `1px solid ${c.divider}`,
});

export const timeCol = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.3rem',
});
export const timeText = style({
  fontSize: '1.4rem',
  fontWeight: 700,
  color: c.text,
});
export const timeYmd = style({
  fontSize: '1.1rem',
  color: c.sub,
});

export const cardsCol = style({
  display: 'grid',
  gap: '0.8rem',
});

export const card = style({
  borderRadius: '1rem',
  background: '#EEF4FF',
  border: `1px solid ${c.primary}`,
  padding: '0.8rem',
});

export const cardTop = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  gap: '0.8rem',
});

export const checkboxWrap = style({
  position: 'relative',
  width: '1.4rem',
  height: '1.4rem',
});
export const checkFake = style({
  position: 'absolute',
  inset: 0,
  borderRadius: '0.3rem',
  border: `1px solid ${c.border}`,
  background: '#fff',
  selectors: {
    'input:checked + &': {
      background: c.check,
      borderColor: c.check,
    },
  },
});
export const cardBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});
export const cardTitle = style({
  fontSize: '1.4rem',
  fontWeight: 700,
  color: c.text,
});
export const cardPlace = style({
  fontSize: '1.2rem',
  color: c.sub,
});
export const cardNote = style({
  marginTop: '0.2rem',
  fontSize: '1.15rem',
  color: c.sub,
});
export const cardMore = style({
  background: '#fff',
  border: 'none',
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '0.6rem',
  cursor: 'pointer',
  selectors: {
    '&:hover': { boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' },
  },
});
