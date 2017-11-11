import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default styled.p`
  margin: 0;
  line-height: 1.4;
  font-size: 20px;
  font-weight: 300;

  ${breakpoint('tablet')`
    font-size: 28px;
  `};
`;
