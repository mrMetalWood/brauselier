import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.svg';

import {
  primaryAccentColor,
  secondaryFontColor
} from '../../global-styles/variables';

const Container = styled.div`
  height: 100px; // Pixel height is controlled by grid
  width: 100%;
  background: ${primaryAccentColor};
  color: ${secondaryFontColor};
`;

const Footer = () => <Container>Impressum</Container>;

export default Footer;
