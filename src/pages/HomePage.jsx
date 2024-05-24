import React, { useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Globe from '../components/Globe';
import AboutUs from '../components/AboutUs';
import { Container, } from '@chakra-ui/react';
import OnLoad from '../animations/OnLoad';

const HomePage = ({ setCursorVariant, setCursorText }) => {
  const [isLoading, setIsLoading] = useState(true);
  const setScrollCursor = () => {
    setCursorVariant('buy');
    setCursorText('scroll');
  }

  const setScrollLeave = () => {
    setCursorVariant('default');
    setCursorText('');
  }

  return (
    <>
      <Container
        className="home"
        bg="#202020"
        h="100vh"
        width="100%"
        maxW="100%"
        p={0}
      // onMouseEnter={setScrollCursor}
      // onMouseLeave={setScrollLeave}
      >
        {isLoading && <OnLoad cleanup={setIsLoading} />}
        <Globe />
        <Header />
      </Container>
      {/* <Second /> */}
      <AboutUs />
    </>
  );
};

export default HomePage;
