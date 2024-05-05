import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Globe from '../components/Globe';
import { Container } from '@chakra-ui/react';
import OnLoad from '../utils/OnLoad';

const HomePage = () => {
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
        <OnLoad />
        <Header />
        <Globe />
        <Container
          bg="black"
          borderTop="1px"
          borderColor="red.200"
          m={0}
          color="white"
          position="relative"
          minW="100%"
          height="100vh"
        >
          testing new container
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
