import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import {mainGrid, defaultGap} from '../../styles/variables';

export default styled.div`
  ${mainGrid};

  padding: 0 ${defaultGap};

  ${breakpoint('tablet')`
    padding: 0;
  `};
`;
