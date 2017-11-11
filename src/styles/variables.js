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

const defaultGap = '8px';

const mainGrid = `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${defaultGap} ${defaultGap}
`;

const mainMaxWidth = '1400px';

const primaryFont = `'Oswald', sans-serif`;

const weightExtraLight = 200;
const weightLight = 300;
const weightMedium = 500;
const weightSemiBold = 600;

export {
  primaryAccentColor,
  secondaryFontColor,
  mainMaxWidth,
  mainGrid,
  stripeBackground,
  primaryFont,
  weightExtraLight,
  weightLight,
  weightMedium,
  weightSemiBold,
  defaultGap
};
