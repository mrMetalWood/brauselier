import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/header/Header';

import initGlobalStyles from '../global-styles/index';
initGlobalStyles();

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = ({children}) => (
  <Container>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {
          name: 'description',
          content: 'Sample'
        },
        {
          name: 'keywords',
          content: 'sample, something'
        }
      ]}
    />
    <Header />
    {children()}{' '}
  </Container>
);

Wrapper.propTypes = {
  children: PropTypes.func
};

export default Wrapper;
