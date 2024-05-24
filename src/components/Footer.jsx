import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Flex, Spacer, Text, VStack, Image, Show } from "@chakra-ui/react";
import ParallaxText from "./HorizontalScrollText";
import AnimatedDivider from "../animations/Divider";
import Underline from "../animations/Underline";

export const goToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const Footer = () => {
    const container = useRef();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    return (
        <div ref={container}>
            <FooterContent scrollProgress={scrollYProgress} />
        </div>
    )
}

const FooterContent = ({ scrollProgress }) => {
    const y = useTransform(scrollProgress, [0, 1], [-350, 0])
    return (
        <VStack p={0} maxW='100%' h='100vh' bg='black' overflow='hidden'>
            <motion.div style={{ y, paddingTop: '1%' }}>
                <AnimatedDivider />
                <ParallaxText baseVelocity={-5}>let's talk</ParallaxText>
                <AnimatedDivider />
            </motion.div>
            <Flex ml={10} width='100%'>
                <Underline>
                    <Text mt={5} alignSelf='start' fontSize={{ base: '2xl', md: '4xl', xl: '7xl' }} fontWeight={300} cursor='pointer'>
                        hello@jabbar.studio
                    </Text>
                </Underline>
            </Flex>
            <Spacer />
            <Text pl={10} fontSize={{ xl: '2xl' }} fontWeight={200} textTransform='uppercase' alignSelf='start'>Jamal Jabbar</Text>
            <Text pl={10} fontSize={{ xl: '2xl' }} fontWeight={200} alignSelf='start' cursor='pointer'>+1 (469) 664 8690</Text>
            <Spacer />
            <Flex p={10} width='100%'>
                <Text textTransform='capitalize' fontSize={{ base: 'sm', xl: 'md' }} fontWeight={100} opacity={.5}>
                    © 2024, Jabbar Studios, all rights reserved
                </Text>
                <Spacer />
                <Show above='sm'>
                    <Underline>
                        <Text cursor='pointer' onClick={goToTop} fontSize={{ xl: 'lg' }}>Back to top</Text>
                    </Underline>
                </Show>
            </Flex>
        </VStack>
    )
};

export default Footer;