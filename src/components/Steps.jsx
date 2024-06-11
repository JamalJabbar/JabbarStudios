import {
  Container,
  VStack,
  Box,
  Text,
  Flex,
  Spacer,
  StackDivider,
} from '@chakra-ui/react';
import AnimatedDivider from '../animations/ScrollDivider';
import RevealText from '../animations/RevealText';

const Steps = () => {
  const listOfSteps = [
    {
      name: 'Consult',
      description:
        'We identify business challenges and develop digital solutions to unlock growth and bottom-line results.',
      bullets: [
        'Digital Strategy',
        'Copywriting',
        'Website Strategy',
        'SEO',
        'Digital Advertising',
        'Conversion Rate Optimization',
      ],
    },
    {
      name: 'Design',
      description:
        'We craft visually-engaging brand identities and refined marketing materials to help drive your business forward.',
      bullets: [
        'Website Design',
        'UX/UI Design',
        'Logo Design',
        'Brand & Style Guides',
        'Pitch Decks',
        'Offering Memorandums',
        'Conversion Rate Optimization',
      ],
    },
    {
      name: 'Implement',
      description:
        'We create impactful websites that allow companies to better explain their value propositions, increase visibility, and close higher-value deals.',
      bullets: [
        'Website Development',
        'Custom Web Apps',
        'CMS Systems',
        'Technical SEO & Structured Data',
        'Support & Maintenance',
        'Testing & QA',
      ],
    },
  ];

  return (
    <Container ml={10} mb={10} mr={10} p={0} maxW="90vw" position="relative">
      <Text
        alignSelf="start"
        fontSize={{ base: 'xl', md: '2xl', xl: '3xl', '2xl': '5xl' }}
        fontWeight={100}
      >
        <RevealText translate={50} delay={0}>
          Our 3 step process...
        </RevealText>
      </Text>

      <AnimatedDivider />

      <VStack mt={60} mr={10} spacing={200}>
        {listOfSteps.map((step, index) => {
          return (
            <RevealText key={index} translate={100} delay={1}>
              <Box h={{ base: '' }} w="100%">
                <Flex h="100%" w="100%" justify="space-evenly">
                  <VStack h="100%">
                    <RevealText
                      style={{
                        display: 'flex',
                        alignSelf: 'start',
                        alignItems: 'baseline',
                      }}
                    >
                      <Flex align="baseline">
                        <Text
                          fontSize={{ xl: '5xl', '2xl': '7xl' }}
                          fontWeight={400}
                          mr={5}
                        >
                          0{index + 1}.
                        </Text>
                        <Text
                          fontSize={{ xl: 'xl', '2xl': '3xl' }}
                          fontWeight={400}
                          textTransform="uppercase"
                        >
                          {step.name}
                        </Text>
                      </Flex>
                    </RevealText>
                    <Spacer />
                    <Text
                      alignSelf="start"
                      w="50%"
                      fontSize={{ base: 'lg', xl: '4xl', '2xl': '6xl' }}
                      fontWeight={100}
                    >
                      {step.description}
                    </Text>
                  </VStack>
                  <VStack
                    align="flex-start"
                    h="100%"
                    w="40%"
                    justifyContent="center"
                    divider={<StackDivider borderColor="#8341e6" />}
                  >
                    {step.bullets.map((bullet, index) => {
                      return (
                        <Box fontSize={{ '2xl': '3xl' }} key={index} p={5}>
                          {bullet}
                        </Box>
                      );
                    })}
                  </VStack>
                </Flex>
              </Box>
            </RevealText>
          );
        })}
      </VStack>
    </Container>
  );
};

export default Steps;
