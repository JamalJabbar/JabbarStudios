import * as React from 'react';
import { Text, VStack, StackDivider } from '@chakra-ui/react';
import Reveal from '../utils/Reveal';

export default function Subheader() {
  return (
    <Reveal>
      <Text
        fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '7xl' }}
        width={{ base: '100%', md: '75%', xl: '65%', '2xl': '45%' }}
        fontFamily="Exo"
        color="white"
        zIndex={1}
      >
        Where <i>technology</i> and <i>creativity</i> combine to craft tailored
        solutions for your business needs
      </Text>
    </Reveal>
  );
}
