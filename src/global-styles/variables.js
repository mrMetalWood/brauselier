import {rgba} from 'polished';

const white = '#ffffff';
const scarpaFlow = '#4E4C5D';

const primaryAccentColor = scarpaFlow;
const secondaryFontColor = white;

const stripeBackground = `repeating-linear-gradient(
  -63deg,
  ${white} 0px, ${white} 10px,
  ${rgba(primaryAccentColor, 0.05)} 10px, ${rgba(primaryAccentColor, 0.05)} 11px
);`;

const mainGrid = `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 8px 8px
`;

const mainMaxWidth = '1400px';

const primaryFont = `'Oswald', sans-serif`;

export {
  primaryAccentColor,
  secondaryFontColor,
  mainMaxWidth,
  mainGrid,
  stripeBackground,
  primaryFont
};
