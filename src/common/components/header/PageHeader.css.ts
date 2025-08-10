import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/styles/token';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '5rem',
  padding: '2.2rem 1.6rem',
  backgroundColor: colors.white01,
  position: 'relative',
  borderBottom: `1px solid ${colors.grey10}`,
});

export const backButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  width: '1.55rem',
  height: '1.55rem',
  position: 'absolute',
  left: '1.6rem',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const title = style({
  ...fonts.body01,
  color: colors.black01,
  textAlign: 'center',
});
