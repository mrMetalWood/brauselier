import styled from 'styled-components';

import {primaryAccentColor} from '../../styles/variables';

export default styled.div`
  align-items: center;
  background: ${primaryAccentColor};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  height: 100%; // Pixel height is controlled by grid
  justify-content: center;
  width: 100%;
  z-index: 2;
  position: sticky;
  top: 0;
`;
