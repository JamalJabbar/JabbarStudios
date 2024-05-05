import * as React from 'react';
import { Image, Text, Spacer, VStack } from '@chakra-ui/react';

import Subheader from '../components/Subheader';
import Reveal from '../utils/Reveal';

export default function Header() {
  return (
    <VStack
      position="absolute"
      h="93vh"
      w="96vw"
      color="white"
      zIndex={1}
      align="flex-start"
      pl={{ base: 10, lg: 20 }}
    >
      <Reveal>
        <Image
          pt={20}
          userSelect="none"
          width={{ base: '90vw', md: '60vw', xl: '50vw%', '2xl': '40vw' }}
          src="/jabbarstudios.svg"
        ></Image>
      </Reveal>
      <Reveal>
        <Text
          fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}
          fontFamily="Exo"
          as="i"
          zIndex={1}
        >
          simplicity, the ultimate form of sophistication
        </Text>
      </Reveal>
      <Spacer />
      <Subheader />
    </VStack>
  );
}
