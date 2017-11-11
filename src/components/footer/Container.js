import styled from 'styled-components';

import {
  primaryAccentColor,
  secondaryFontColor,
  weightExtraLight
} from '../../styles/variables';

export default styled.div`
  background: ${primaryAccentColor};
  color: ${secondaryFontColor};
  font-weight: ${weightExtraLight};
  height: 100%; // Pixel height is controlled by grid
  width: 100%;
`;
