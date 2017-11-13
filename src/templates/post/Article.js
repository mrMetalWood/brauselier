import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import {weightLight} from '../../styles/variables';

export default styled.div`
  grid-column-start: 1;
  grid-column-end: span 12;

  font-size: 20px;
  line-height: 1.5;
  font-weight: ${weightLight};

  ${breakpoint('tablet')`
    grid-column-start: 2;
    grid-column-end: span 10;
    font-size: 24px;
  `};

  ${breakpoint('desktop')`
    grid-column-start: 3;
    grid-column-end: span 8;
  `};
`;
