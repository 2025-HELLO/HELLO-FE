import { style } from '@vanilla-extract/css';

export const wrap = style({
  minHeight: '100vh',
  background: '#fff',
  padding: '32px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 600,
  marginBottom: '24px',
  color: '#333',
});

export const list = style({
  width: '100%',
  maxWidth: '320px',
  background: '#f9f9f9',
  borderRadius: '12px',
  padding: '8px 0',
  marginBottom: '24px',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 20px',
  borderBottom: '1px solid #e0e0e0',
  selectors: {
    '&:last-child': { borderBottom: 'none' },
  },
});

export const rank = style({
  width: '32px',
  fontWeight: 600,
  color: '#666',
});

export const name = style({
  flex: 1,
  textAlign: 'left',
  color: '#333',
});

export const time = style({
  background: '#1976d2',
  color: '#fff',
  padding: '4px 12px',
  borderRadius: '20px',
  fontWeight: 500,
  fontSize: '14px',
});

export const startBtn = style({
  width: '200px',
  height: '44px',
  borderRadius: '8px',
  border: 'none',
  background: '#4dabf7',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
});
