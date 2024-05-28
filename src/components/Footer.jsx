import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Flex, Spacer, Text, VStack, Image, Show, Box } from "@chakra-ui/react";
import ParallaxText from "../animations/HorizontalScrollText";
import AnimatedDivider from "../animations/ScrollDivider";
import Underline from "../animations/Underline";
import RevealText from "../animations/RevealText";

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
    const y = useTransform(scrollProgress, [0, 1], [-225, 0])
    return (
        <VStack mt={20} p={0} h='110vh' maxW='100%' bg='black' borderRadius='5% 5% 0px 0px'>
            <Flex ml={10} pt={50} width='100%'>
                <RevealText>
                    <Underline>
                        <Text mt={5} alignSelf='start' fontSize={{ base: '2xl', md: '4xl', xl: '7xl' }} fontWeight={300} cursor='pointer'>
                            hello@jabbar.studio
                        </Text>
                    </Underline>
                </RevealText>
            </Flex>
            <Spacer />
            <RevealText style={{ alignSelf: 'start' }}>
                <Text ml={10} fontSize={{ xl: '2xl' }} fontWeight={200} textTransform='uppercase' alignSelf='start'>Jamal Jabbar</Text>
                <Text ml={10} fontSize={{ xl: '2xl' }} fontWeight={200} alignSelf='start' cursor='pointer'>
                    <Underline>
                        <>
                            +1 (469) 664 8690
                        </>
                    </Underline>
                </Text>
            </RevealText>
            <Spacer />
            <Box pb={10}>
                <Box className="divider" />
                <ParallaxText baseVelocity={-5}>let's talk</ParallaxText>
                <Box className="divider" />
            </Box>
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