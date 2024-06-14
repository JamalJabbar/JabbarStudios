import * as React from 'react';
import { Text, VStack, StackDivider } from '@chakra-ui/react';
import Reveal from '../animations/Reveal';

const Subheader = () => {
  return (
    <Reveal delay={1.2}>
      <Text
        mt={20}
        pb={10}
        fontSize={{
          base: '2xl',
          md: '3xl',
          lg: '4xl',
          xl: '5xl',
          '2xl': '6xl',
        }}
        width={{ base: '100%', md: '80%', '2xl': '70%' }}
        color="white"
        zIndex={1}
      >
        Simplicity is the ultimate form of sophistication
      </Text>
    </Reveal>
  );
};

export default Subheader;
