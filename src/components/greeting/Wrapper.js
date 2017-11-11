import styled from 'styled-components';
import {rgba} from 'polished';
import breakpoint from 'styled-components-breakpoint';

import {mainGrid, primaryAccentColor} from '../../styles/variables';

export default styled.div`
  position: relative;
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 25px 0;
  background: white;
  grid-column-end: span 12;
  ${mainGrid};
  color: ${primaryAccentColor};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${rgba(primaryAccentColor, 0.1)};
    z-index: 0;
  }

  ${breakpoint('tablet')`
    padding: 75px 0;
  `};
`;
