import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default styled.h1`
  grid-column-start: 1;
  grid-column-end: span 12;
  font-size: 32px;
  margin-bottom: 15px;

  ${breakpoint('tablet')`
    grid-column-start: 2;
    grid-column-end: span 10;
    font-size: 40px;
    margin-bottom: 0.67em;
  `};

  ${breakpoint('desktop')`
    grid-column-start: 3;
    grid-column-end: span 8;
  `};
`;
