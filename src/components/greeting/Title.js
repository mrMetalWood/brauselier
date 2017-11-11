import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;

  ${breakpoint('tablet')`
    font-size: 28px;
  `};
`;
