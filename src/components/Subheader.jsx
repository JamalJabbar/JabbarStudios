import * as React from 'react';
import { Text, VStack, StackDivider } from '@chakra-ui/react';
import Reveal from '../animations/Reveal';

const Subheader = () => {
  return (
    <Reveal>
      <Text
        mt={20}
        pb={10}
        fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
        width={{ base: '100%', md: '75%', xl: '65%', '2xl': '70%' }}
        color="white"
        zIndex={1}
      >
        Simplicity is the ultimate form of sophistication
      </Text>
    </Reveal>
  );
};

export default Subheader;