import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/styles/token';

const baseButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30rem',
  height: '3.8rem',
  borderRadius: '5px',
  border: 'none',
  color: colors.white01,
  ...fonts.caption01,
  cursor: 'pointer',
};

export const primaryButton = style({
  ...baseButton,
  backgroundColor: colors.blue01,
});

export const secondaryButton = style({
  ...baseButton,
  backgroundColor: colors.blue03,
});
