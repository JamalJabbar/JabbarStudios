import React, { useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Globe from '../components/Globe';
import AboutUs from '../components/AboutUs';
import Steps from '../components/Steps';
import { VStack } from '@chakra-ui/react';
// import Spline from '@splinetool/react-spline';

const HomePage = ({ setCursorVariant, setCursorText }) => {
  const setScrollCursor = () => {
    setCursorVariant('buy');
    setCursorText('scroll');
  };

  const setScrollLeave = () => {
    setCursorVariant('default');
    setCursorText('');
  };

  return (
    <VStack>
      <Globe />
      <Header />
      <AboutUs />
      <Steps />
      {/* <Spline scene="https://prod.spline.design/UUY60b5IA4I8cqmh/scene.splinecode" /> */}
    </VStack>
  );
};

export default HomePage;
