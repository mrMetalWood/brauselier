import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.svg';

import {
  primaryAccentColor,
  secondaryFontColor
} from '../../global-styles/variables';

const Container = styled.div`
  height: 170px;
  width: 100%;
  background: ${primaryAccentColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);
`;

const Logo = styled.img`width: 200px;`;

const Subtitle = styled.span`color: ${secondaryFontColor};`;

const Header = () => (
  <Container>
    <Logo src={logo} /> <Subtitle> Limonade - Rezensionen </Subtitle>{' '}
  </Container>
);

export default Header;
