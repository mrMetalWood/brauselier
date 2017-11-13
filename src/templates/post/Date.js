import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import {weightLight} from '../../styles/variables';

export default styled.div`
  font-size: 20px;
  font-weight: ${weightLight};

  ${breakpoint('tablet')`
    font-size: 24px;
  `};
`;
