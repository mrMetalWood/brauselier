import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default styled.div`
  grid-column-start: 2;
  grid-column-end: span 10;
  z-index: 1;

  ${breakpoint('tablet')`
    grid-column-start: 3;
    grid-column-end: span 8;
  `};
`;
