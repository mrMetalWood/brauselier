import styled from 'styled-components';
import Img from 'gatsby-image';

import {secondaryFontColor} from '../../styles/variables';

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  font-size: 64px;
  font-weight: 500;
  text-align: center;
  color: ${secondaryFontColor};
  z-index: 1;

  &:hover {
    opacity: 1;
  }
`;
