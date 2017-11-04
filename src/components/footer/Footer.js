import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.svg';

import {
  primaryAccentColor,
  secondaryFontColor,
  mainGrid,
  mainMaxWidth
} from '../../global-styles/variables';

const Container = styled.div`
  height: 100%; // Pixel height is controlled by grid
  width: 100%;
  background: ${primaryAccentColor};
  color: ${secondaryFontColor};
  font-weight: 200;
`;

const Grid = styled.div`
  width: 100%;
  max-width: ${mainMaxWidth};
  ${mainGrid};
  align-items: center;
  margin: 0 auto;
  height: 100%;
`;

const Content = styled.div`grid-column-start: 3;`;

const Footer = () => (
  <Container>
    <Grid>
      <Content>Impressum</Content>
    </Grid>
  </Container>
);

export default Footer;
