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
import SlideReveal from '../animations/SlideReveal';

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
    <Container
      mt="25%"
      ml={10}
      mb={10}
      mr={10}
      p={0}
      maxW="90vw"
      position="relative"
    >
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

      <VStack mt="25%" mr={10} spacing={200}>
        {listOfSteps.map((step, index) => {
          return (
            <>
              <VStack h="75vh" w="100%" justify="center">
                <RevealText
                  style={{
                    display: 'flex',
                    alignSelf: 'start',
                    alignItems: 'baseline',
                  }}
                >
                  <Flex align="baseline" mb={{ base: 50, md: 0 }}>
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
                <Flex w="100%" direction={{ base: 'column', md: 'row' }}>
                  <RevealText
                    delay={0.5}
                    style={{
                      display: 'flex',
                      flexDirection: 'column-reverse',
                    }}
                  >
                    <Text
                      alignSelf="start"
                      mb={{ base: 50, md: 0 }}
                      w={{ base: '100%', md: '90%', xl: '70%' }}
                      fontSize={{
                        base: 'lg',
                        md: '3xl',
                        xl: '4xl',
                        '2xl': '6xl',
                      }}
                      fontWeight={300}
                    >
                      {step.description}
                    </Text>
                  </RevealText>
                  <VStack
                    w={{ base: '100%', md: '70%', xl: '50%' }}
                    align="flex-start"
                    h="100%"
                    justifyContent="center"
                  >
                    {step.bullets.map((bullet, index) => {
                      return (
                        <RevealText
                          translate={0}
                          style={{ width: '100%' }}
                          key={index}
                        >
                          <Text
                            fontWeight={300}
                            position="relative"
                            h="100%"
                            w="100%"
                            fontSize={{ '2xl': '3xl' }}
                            p={5}
                            borderBottom={
                              index === step.bullets.length - 1
                                ? ''
                                : '1px solid #8341e6'
                            }
                          >
                            {bullet}
                            <SlideReveal />
                          </Text>
                        </RevealText>
                      );
                    })}
                  </VStack>
                </Flex>
              </VStack>
              {index !== listOfSteps.length - 1 && <AnimatedDivider />}
            </>
          );
        })}
      </VStack>
    </Container>
  );
};

export default Steps;
