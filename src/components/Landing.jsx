import React from 'react';
import { Container } from '@chakra-ui/react';
import OnLoad from '../utils/OnLoad';
import Header from './Header';
import Globe from './Globe';

const Landing = () => {
  return (
    <Container>
      <OnLoad />
      <Header />
      <Globe />
    </Container>
  );
};

export default Landing;
