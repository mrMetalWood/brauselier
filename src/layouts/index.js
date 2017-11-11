import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import HeadMeta from '../components/head-meta/head-meta';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import {stripeBackground, mainMaxWidth, defaultGap} from '../styles/variables';

import initGlobalStyles from '../styles/index';
initGlobalStyles();

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 85px auto 50px;
  background: ${stripeBackground};
`;

const Content = styled.div`
  width: 100vw;
  max-width: ${mainMaxWidth};
  justify-self: center;
  padding: 0 ${defaultGap};
`;

const Wrapper = ({children}) => (
  <Container>
    <HeadMeta />
    <Header />
    <Content>{children()}</Content>
    <Footer />
  </Container>
);

Wrapper.propTypes = {
  children: PropTypes.func
};

export default Wrapper;
