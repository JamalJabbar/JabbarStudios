import React, { useState } from 'react';
import '../index.css';
import { Container, VStack, Text, StackDivider } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';

const Second = () => {
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            mt={40}
            w='100%'>
            <Text
                fontSize={{ base: 'lg', md: 'xl', xl: '5xl' }}
                h='40vh' w='100%' align='center'>We help breathe life into companies by working closely with
                business owners who care about both their virtual and physical
                image. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            <Container
                bg="#202020"
                m={0}
                pt={5}
                color="white"
                minW="100%"
                height="100vh"
            >
                <Spline scene="https://prod.spline.design/f8bcJxiCkxNJ4Qpb/scene.splinecode" />
            </Container>
        </VStack>
    )
}

export default Second;