import {injectGlobal} from 'styled-components';

import normalizeCss from './normalize-css';

export default () => injectGlobal`
  ${normalizeCss}

  @font-face {
    font-family: Verb;
    src: url('assets/fonts/verbregular-webfont-32kb.woff');
  }

  @font-face {
    font-family: VerbComp;
    src: url('assets/fonts/verbcompregular-webfont-30kb.woff');
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;
