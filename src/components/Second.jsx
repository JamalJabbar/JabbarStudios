import '../index.css';
import React, { useEffect, useRef, useState } from 'react';
import { Container, VStack, Text, Spacer, Flex } from '@chakra-ui/react';
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
// import Spline from '@splinetool/react-spline';
import SlideText from '../animations/SlideText';

const Second = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ container: ref });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 100],
    ['#202020', '#000'],
  );

  return (
    <div ref={ref}>
      <motion.div style={{ backgroundColor: backgroundColor }}>
        <Container maxW="100%" h="100vh" position="relative" mt={20} pb={200}>
          <Spline
            className="particles"
            scene="https://prod.spline.design/f8bcJxiCkxNJ4Qpb/scene.splinecode"
          />
          <VStack
            h="100vh"
            w="100%"
            pr={100}
            pl={100}
            textTransform="uppercase"
            fontWeight={500}
            fontSize={{ base: 'lg', md: 'xl', xl: '6xl' }}
          >
            <Spacer />
            <SlideText start={-600} end={0}>
              <Text position="relative" w={600} textAlign={'left'}>
                Bring your brand to{' '}
                <span style={{ color: '#8341e6' }}>life...</span>
              </Text>
            </SlideText>
            <Spacer />
            <Text
              w={400}
              alignSelf={'start'}
              fontSize={{ base: 'lg', xl: 'xl' }}
            >
              Lorem ipsum bakahh aiirkrk lahahaj hajkakkkk ,a,an aj ka kakak{' '}
            </Text>
            <Spacer />
            <SlideText start={600} end={0}>
              <Text w={600} textAlign={'right'}>
                connect your business to the{' '}
                <span style={{ color: '#8341e6' }}>world</span>
              </Text>
            </SlideText>
            <Spacer />
          </VStack>
        </Container>
      </motion.div>
    </div>
  );
};

export default Second;
