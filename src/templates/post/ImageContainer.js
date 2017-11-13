import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  display: block;
  grid-column-start: 1;
  grid-column-end: span 12;

  ${breakpoint('tablet')`
    grid-column-start: 7;
    grid-column-end: span 5;
  `};

  ${breakpoint('desktop')`
    grid-column-start: 7;
    grid-column-end: span 4;
  `};
`;
