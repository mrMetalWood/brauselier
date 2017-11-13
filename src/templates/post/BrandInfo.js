import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import {weightLight} from '../../styles/variables';

export default styled.div`
  grid-column-start: 1;
  grid-column-end: span 12;
  font-size: 20px;
  line-height: 1.5;
  font-weight: ${weightLight};
  margin-bottom: 15px;

  ${breakpoint('tablet')`
    grid-column-start: 2;
    grid-column-end: span 4;
    font-size: 24px;
    margin-bottom: 0;
  `};

  ${breakpoint('desktop')`
    grid-column-start: 3;
    grid-column-end: span 3;
  `};
`;
