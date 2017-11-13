import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import {weightSemiBold} from '../../styles/variables';

export default styled.div`
  font-size: 20px;
  font-weight: ${weightSemiBold};

  ${breakpoint('tablet')`
    font-size: 24px;
  `};
`;
