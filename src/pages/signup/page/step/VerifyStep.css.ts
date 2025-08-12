import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem 4.4rem',
  },
]);

export const title = style([
  fonts.title01,
  colors.black01,
  { marginBottom: '2.2rem', width: '30rem' },
]);

export const description = style([
  fonts.body03,
  colors.black01,
  { marginBottom: '3.2rem', width: '30rem' },
]);

export const verifyCodeContainer = style([
  layout.flexColumn,
  {
    backgroundColor: colors.grey11,
    borderRadius: '10px',
    gap: '3rem',
    height: '15rem',
    marginBottom: '2.4rem',
    padding: '1.2rem',
    width: '33rem',
  },
]);

export const verifyCodeTitle = style([fonts.caption01, colors.black01]);

export const verifyCodeInputContainer = style([
  layout.flexAlignCenter,
  {
    gap: '1.4rem',
  },
]);

export const verifyCodeInput = style([
  layout.flexAlignCenter,
  fonts.caption01,
  {
    backgroundColor: colors.white01,
    border: `1px solid ${colors.grey10}`,
    borderRadius: '0.5rem',
    height: '4rem',
    textAlign: 'center',
    width: '2.5rem',
  },
]);

export const descriptionContainer = style([
  layout.flexColumn,
  {
    border: `1px solid ${colors.grey09}`,
    borderRadius: '10px',
    gap: '0.8rem',
    height: '13rem',
    padding: '2rem 2.8rem',
    width: '33rem',
  },
]);

export const descriptionTitle = style([fonts.title04, colors.black01, { display: 'block' }]);

export const descriptionText = style([fonts.body01, colors.black01]);

export const descriptionBody = style([fonts.caption02, colors.grey11, { display: 'block' }]);

export const buttonContainer = style([
  {
    bottom: '5.5rem',
    left: '50%',
    position: 'fixed',
    transform: 'translateX(-50%)',
  },
]);
