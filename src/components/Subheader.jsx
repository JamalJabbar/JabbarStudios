import * as React from 'react';
import { Text, VStack, StackDivider } from '@chakra-ui/react';
import Reveal from '../utils/Reveal';

export default function Subheader() {
  return (
    <Reveal>
      <Text
        pb={10}
        fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
        width={{ base: '100%', md: '75%', xl: '65%', '2xl': '70%' }}
        fontFamily="Inter"
        color="white"
        zIndex={1}
      >
        Simplicity is the ultimate form of sophistication
      </Text>
    </Reveal>
  );
}
