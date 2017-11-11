import styled from 'styled-components';
import Link from 'gatsby-link';
import breakpoint from 'styled-components-breakpoint';

export default styled(Link)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  display: block;
  grid-column-end: span 12;

  ${breakpoint('tablet')`
    grid-column-end: span 6;
  `};

  ${breakpoint('desktop')`
    grid-column-end: span 4;
  `};
`;
