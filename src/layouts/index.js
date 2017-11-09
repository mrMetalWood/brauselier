import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import {stripeBackground, mainMaxWidth} from '../global-styles/variables';
import initGlobalStyles from '../global-styles/index';
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
  padding: 0 8px;
`;

const Wrapper = ({children}) => (
  <Container>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Limonade Rezensionen" />
      <meta
        name="keywords"
        content="Brause, Limonade, Drinks, Rezensionen, Koffein"
      />
      <title>Brauselier</title>

      <meta name="theme-color" content="#ffffff" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="apple-mobile-web-app-title" content="Brauselier" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="msapplication-navbutton-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#4e4c5d" />
      <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
      <meta name="msapplication-config" content="browserconfig.xml" />

      <meta name="application-name" content="Brauselier" />
      <meta name="msapplication-tooltip" content="Brauselier" />
      <meta name="msapplication-starturl" content="/" />

      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      <meta name="nightmode" content="enable" />

      <meta name="layoutmode" content="fitscreen" />

      <meta name="screen-orientation" content="portrait" />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      <link
        href="/android-chrome-512x512.png"
        rel="apple-touch-startup-image"
      />

      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4e4c5d" />

      <link href="/android-chrome-512x512.png" rel="icon" sizes="192x192" />

      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />

      <link rel="manifest" href="/manifest.json" />
    </Helmet>
    <Header />
    <Content>{children()}</Content>
    <Footer />
  </Container>
);

Wrapper.propTypes = {
  children: PropTypes.func
};

export default Wrapper;
