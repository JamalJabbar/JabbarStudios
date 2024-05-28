import { Container, VStack, Box, Text, Flex, Spacer, StackDivider } from "@chakra-ui/react";
import Spline from '@splinetool/react-spline';
import RevealText from "../animations/RevealText";
import { steps } from "framer-motion";

const Steps = () => {
    const listOfSteps = [
        {
            name: 'Consult',
            description: 'We identify business challenges and develop digital solutions to unlock growth and bottom-line results.',
            bullets: [
                'Digital Strategy',
                'Copywriting',
                'Website Strategy',
                'SEO',
                'Digital Advertising',
                'Conversion Rate Optimization'
            ]
        },
        {
            name: 'Design',
            description: 'We craft visually-engaging brand identities and refined marketing materials to help drive your business forward.',
            bullets: [
                'Website Design',
                'UX/UI Design',
                'Logo Design',
                'Brand & Style Guides',
                'Pitch Decks',
                'Offering Memorandums',
                'Conversion Rate Optimization'
            ]
        },
        {
            name: 'Implement',
            description: 'We create impactful websites that allow companies to better explain their value propositions, increase visibility, and close higher-value deals.',
            bullets: [
                'Website Development',
                'Custom Web Apps',
                'CMS Systems',
                'Technical SEO & Structured Data',
                'Support & Maintenance',
                'Testing & QA',
            ]
        },
    ]

    return (
        <Container mt={10} mb={10} p={0} maxW='100vw' position='relative'>
            <VStack ml={20} mr={20} spacing={20}>
                {listOfSteps.map((step, index) => {
                    return (
                        <Box borderRadius='5%' border='1px solid #8341e6' h={{ base: '', xl: '90vh' }} w='100%' p={20} s>
                            <Flex h='100%' w='100%' justify='space-evenly'>
                                <VStack h='100%'>
                                    <RevealText style={{ display: 'flex', alignSelf: 'start', alignItems: 'baseline' }}>
                                        <Flex align='baseline'>
                                            <Text fontSize={{ xl: '5xl' }} fontWeight={400} mr={5}>0{index + 1}.</Text>
                                            <Text fontWeight={200} textTransform='uppercase'>{step.name}</Text>
                                        </Flex>
                                    </RevealText>
                                    <Spacer />
                                    <Text alignSelf='start' w='50%' fontSize={{ base: 'lg', xl: '4xl' }} fontWeight={300}>
                                        {step.description}
                                    </Text>
                                </VStack>
                                <VStack align='flex-start' h='100%' w='40%' divider={<StackDivider borderColor='#8341e6' />}>
                                    {step.bullets.map((bullet) => {
                                        return (
                                            <Box p={5}>{bullet}</Box>
                                        )
                                    })}
                                </VStack>
                            </Flex>
                        </Box>
                    )
                })}
            </VStack>
        </Container >
    )
};

export default Steps;