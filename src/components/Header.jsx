import React, { useEffect, useState, useRef } from 'react';
import { Image, Text, Spacer, VStack } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

import Subheader from '../components/Subheader';
import Reveal from '../animations/Reveal';

const Header = () => {
  return (
    <VStack
      position="absolute"
      top={0}
      h={{ base: '75vh', lg: '100vh' }}
      w="100vw"
      color="white"
      zIndex={1}
      align="flex-start"
      fontWeight={200}
      pl={{ base: 10, lg: 20 }}
      pr={{ base: 10 }}
    >
      <Reveal delay={0.4}>
        <Image
          mt={20}
          pt={20}
          userSelect="none"
          width={{ base: '90vw', md: '60vw', xl: '50vw%', '2xl': '40vw' }}
          src="/jabbar.svg"
        ></Image>
      </Reveal>
      <Reveal delay={0.8}>
        <Text
          fontSize={{ base: 'lg', md: 'xl', xl: '3xl', '2xl': '4xl' }}
          as="i"
          zIndex={1}
        >
          Innovative, curated website design
        </Text>
      </Reveal>
      <Spacer />
      <Subheader />
      <Spacer />
    </VStack>
  );
};

export default Header;
