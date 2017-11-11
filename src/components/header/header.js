import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Logo from './Logo';
import Subtitle from './Subtitle';

import logoPath from '../../images/logo.svg';

const Header = () => (
  <Container>
    <Logo src={logoPath} />
    <Subtitle> Limonade - Rezensionen </Subtitle>
  </Container>
);

export default Header;
