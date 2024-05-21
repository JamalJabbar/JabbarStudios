import '../index.css';
import React, { useEffect, useRef, useState } from 'react';
import { Container, VStack, Text, Spacer, Flex } from '@chakra-ui/react';
import { motion, useAnimate, useInView, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import ScrollText from '../animations/ScrollText';

const Second = () => {
    return (
        <Container
            maxW='100%'
            h='100vh'
            position='relative'
            mt={20}
            mb={200}>
            <Spline className='particles' scene="https://draft.spline.design/34WRRzlYLuIp1lsm/scene.splinecode" />
            <VStack
                h='100%'
                w='100%'
                pr={100}
                pl={100}
                textTransform='uppercase'
                fontWeight={300}
                fontSize={{ base: 'lg', md: 'xl', xl: '5xl' }}>
                <Spacer />
                <ScrollText start={500} end={-200}>
                    <Text position='relative' w={500} alignSelf='start' textAlign={'left'}>
                        Bring your brand to <span style={{ color: '#8341e6' }}>life</span>
                    </Text>
                </ScrollText>
                <Spacer />
                <ScrollText start={-500} end={250}>
                    <Text w={500} alignSelf='end' textAlign={'right'}>
                        and connect your business to the <span style={{ color: '#8341e6' }}>world</span>
                    </Text>
                </ScrollText>
                <Spacer />

            </VStack>
            {/* <Text
                as='i'
                fontSize={{ base: 'lg', md: 'xl', xl: '6xl' }}
                w='100%'
                pr={10}
                pl={10}
                fontFamily="Inter"
                fontWeight={500}
                color='white'>
                <motion.div ref={scope}>
                    <Text
                        color='#8341e6'
                        as='span' mr={20}
                        fontFamily="Inter" fontWeight={200}
                        fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}>
                        jabbar studios
                    </Text>
                    {breahteText.map((word) => (
                        <div className='scroll-text' style={{ marginRight: '12px', textTransform: 'uppercase' }}>
                            {[...word].map((letter) => (
                                <span>{letter}</span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </Text> */}
        </Container >
    )
}

export default Second;