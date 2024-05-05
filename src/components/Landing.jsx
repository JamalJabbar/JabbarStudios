import React from 'react';
import { Container } from '@chakra-ui/react';
import OnLoad from '../utils/OnLoad';
import Header from './Header';
import Globe from './Globe';

export default function Landing() {
  return (
    <Container>
      <OnLoad />
      <Header />
      <Globe />
    </Container>
  );
}
