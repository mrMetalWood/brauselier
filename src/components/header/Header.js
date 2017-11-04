import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.svg';

import {
  primaryAccentColor,
  secondaryFontColor
} from '../../global-styles/variables';

const Container = styled.div`
  height: 100%; // Pixel height is controlled by grid
  width: 100%;
  background: ${primaryAccentColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);
  z-index: 1;
`;

const Logo = styled.img`width: 150px;`;

const Subtitle = styled.span`
  color: ${secondaryFontColor};
  font-weight: 200;
  margin-top: 4px;
`;

const Header = () => (
  <Container>
    <Logo src={logo} /> <Subtitle> Limonade - Rezensionen </Subtitle>{' '}
  </Container>
);

export default Header;
