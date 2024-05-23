import React, { useEffect, useState, useRef } from 'react';
import { Image, Text, Spacer, VStack } from '@chakra-ui/react';
import { motion, useInView, } from 'framer-motion';

import Subheader from '../components/Subheader';
import Reveal from '../animations/Reveal';

const Header = () => {

  return (
    <VStack
      position="absolute"
      top={0}
      h="100vh"
      w="100vw"
      color="white"
      zIndex={1}
      align="flex-start"
      pl={{ base: 10, lg: 20 }}
      pr={{ base: 10, }}
    >
      <Reveal delay={3.8}>
        <Image
          mt={20}
          pt={20}
          userSelect="none"
          width={{ base: '90vw', md: '60vw', xl: '50vw%', '2xl': '40vw' }}
          src="/jabbar.svg"
        ></Image>
      </Reveal>
      <Reveal delay={4.1}>
        <Text
          fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
          as="i"
          zIndex={1}
        >
          Innovative, curated website design
        </Text>
      </Reveal>
      <Subheader />
      <Spacer />
    </VStack>
  );
};

export default Header;
