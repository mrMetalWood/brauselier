import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Container from './Container';
import Title from './Title';
import Text from './Text';

const Greeting = () => (
  <Wrapper>
    <Container>
      <Title>Moin Moin</Title>
      <Text>
        Moin Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        velit, blanditiis facilis nostrum totam unde asperiores impedit autem
        amet dolor sequi ullam ipsa possimus voluptatibus obcaecati culpa
        dolores ex adipisci?
      </Text>
    </Container>
  </Wrapper>
);

export default Greeting;
