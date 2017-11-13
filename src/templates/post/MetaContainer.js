import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default styled.div`
  grid-column-start: 1;
  grid-column-end: span 12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
  margin-bottom: 0;

  ${breakpoint('tablet')`
    grid-column-start: 2;
    grid-column-end: span 10;
    margin-top: 50px;
    margin-bottom: 15px;
  `};

  ${breakpoint('desktop')`
    grid-column-start: 3;
    grid-column-end: span 8;
  `};
`;
