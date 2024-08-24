import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Flex, Spacer, Text, VStack, Image, Show, Box } from '@chakra-ui/react';
import ParallaxText from '../animations/HorizontalScrollText';
import AnimatedDivider from '../animations/ScrollDivider';
import Underline from '../animations/Underline';
import RevealText from '../animations/RevealText';

const goToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function copyText() {
  navigator.clipboard.writeText('jamal.jabbar10@gmail.com');
}

const Footer = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  return (
    <div ref={container}>
      <FooterContent scrollProgress={scrollYProgress} />
    </div>
  );
};

const FooterContent = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-225, 0]);
  return (
    <VStack mt={20} p={0} h="100vh" maxW="100%" bg="black">
      <Flex ml={10} pt={50} width="100%">
        <RevealText>
          <Underline>
            <Text
              onClick={copyText}
              mt={5}
              alignSelf="start"
              fontSize={{ base: '2xl', md: '4xl', xl: '6xl', '2xl': '7xl' }}
              fontWeight={300}
              cursor="pointer"
            >
              jamal.jabbar10@gmail.com
            </Text>
          </Underline>
        </RevealText>
      </Flex>
      <Spacer />
      <RevealText style={{ alignSelf: 'start' }}>
        <Text
          ml={10}
          fontSize={{ xl: '4xl', '2xl': '6xl' }}
          fontWeight={200}
          textTransform="lowercase"
          alignSelf="start"
        >
          Jamal Jabbar
        </Text>
        <Text
          ml={10}
          fontSize={{ xl: '2xl', '2xl': '5xl' }}
          fontWeight={200}
          alignSelf="start"
          cursor="pointer"
        >
          <Underline>
            <a href="tel:+14696648690">+1 (469) 664 8690</a>
          </Underline>
        </Text>
      </RevealText>
      <Spacer />
      <Box pb={10}>
        <Box className="divider" />
        <ParallaxText baseVelocity={-5}>let's talk</ParallaxText>
        <Box className="divider" />
      </Box>
      <Flex p={10} width="100%">
        <Text
          textTransform="capitalize"
          fontSize={{ base: 'sm', xl: 'md' }}
          fontWeight={100}
          opacity={0.5}
        >
          © 2024, Jabbar Studios, all rights reserved
        </Text>
        <Spacer />
        <Show above="sm">
          <Underline underlineColor="#8341e6">
            <Text
              cursor="pointer"
              onClick={goToTop}
              fontSize={{ xl: 'lg', '2xl': '2xl' }}
            >
              Back to top
            </Text>
          </Underline>
        </Show>
      </Flex>
    </VStack>
  );
};

export default Footer;
