import styled from 'styled-components';
import Img from 'gatsby-image';
import breakpoint from 'styled-components-breakpoint';

import {secondaryFontColor} from '../../styles/variables';

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: 1;
  transition: opacity 150ms ease-in-out;
  font-size: 64px;
  font-weight: 500;
  text-align: center;
  color: ${secondaryFontColor};
  z-index: 1;
  padding: 16px 16px 50px 16px;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );

  ${breakpoint('desktop')`
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    align-items: center;
    padding: 16px;


    &:hover {
      opacity: 1;
    }
  `};
`;
