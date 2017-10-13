import {injectGlobal} from 'styled-components';

import normalizeCss from './normalize-css';

export default () => injectGlobal`
  ${normalizeCss}

  @import url('https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700');

  html, body {
    font-family: 'Oswald', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;