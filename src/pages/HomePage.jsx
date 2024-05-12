import React, { useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Globe from '../components/Globe';
import Second from '../components/Second';
import { Container, } from '@chakra-ui/react';
import OnLoad from '../utils/OnLoad';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Container
        className="home"
        bg="#202020"
        h="100vh"
        width="100vw"
        maxW="100%"
        p={0}
      >
        {isLoading && <OnLoad cleanup={setIsLoading} />}
        <Globe />
        <Header />
      </Container>
      <Second />
    </>
  );
};

export default HomePage;
