import '../index.css';
import { VStack, Text, StackDivider } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import HighlightScroll from '../animations/HighlightScroll'
import AnimatedDivider from '../animations/AnimatedDivider';

const AboutUs = () => {
    const aboutUsText = `technology firm that creates-
    tailor made digital solutions-
    through custom wesbites.`.split("-")

    return (
        <VStack
            maxW='100%'
            h='100vh'
            position='relative'
            pt={20}
            mr={10}
            ml={10}>
            <Text
                alignSelf='start'
                fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}
                fontWeight={100}>
                About Us
            </Text>
            <AnimatedDivider />
            <Text mt={20} ml={{ base: 0, xl: '30%' }} fontSize={{ xl: '7xl' }} fontWeight={600}>
                <Text className='scroll-text'>
                    <HighlightScroll />
                    <Text color='#8341e6' mr={5} className='scroll-text'>Jabbar Studios</Text>
                    is a design and
                </Text>
                {aboutUsText.map((line) => (
                    <>
                        <Text className='scroll-text'>
                            <HighlightScroll />
                            {line}
                        </Text>
                    </>
                ))}
            </Text>
        </VStack >
    );
};

export default AboutUs;