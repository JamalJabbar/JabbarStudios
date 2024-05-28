import React, { useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Globe from '../components/Globe';
import AboutUs from '../components/AboutUs';
import Second from '../components/Second';
import { Container, VStack, } from '@chakra-ui/react';

const HomePage = ({ setCursorVariant, setCursorText }) => {
  const setScrollCursor = () => {
    setCursorVariant('buy');
    setCursorText('scroll');
  }

  const setScrollLeave = () => {
    setCursorVariant('default');
    setCursorText('');
  }

  return (
    <VStack>
      <Globe />
      <Header />
      <AboutUs />
    </VStack>
  );
};

export default HomePage;
