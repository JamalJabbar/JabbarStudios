import '../index.css';
import { VStack, Text } from '@chakra-ui/react';
import HighlightScroll from '../animations/HighlightScroll';
import AnimatedDivider from '../animations/ScrollDivider';
import RevealText from '../animations/RevealText';

const AboutUs = () => {
  const aboutUsTextDesktop = `and tech firm that creates-
    tailor made digital solutions-
    through custom wesbites.`.split('-');

  const aboutUsTextMobile = ``;

  return (
    <VStack maxW="100%" position="relative" pt={20} mr={10} ml={10}>
      <Text
        alignSelf="start"
        fontSize={{ base: 'xl', md: '2xl', xl: '3xl', '2xl': '5xl' }}
        fontWeight={100}
      >
        <RevealText translate={50} delay={0}>
          About Us
        </RevealText>
      </Text>
      <AnimatedDivider />
      <VStack ml={{ base: 0, xl: '30%', '2xl': '40%' }}>
        <Text
          mt={{ base: 20, xl: 40 }}
          mb={{ base: 10, xl: 20 }}
          fontSize={{ base: '2xl', xl: '7xl', '2xl': '8xl' }}
          fontWeight={500}
        >
          <Text className="scroll-text">
            <HighlightScroll />
            <Text color="#8341e6" mr={5} className="scroll-text">
              Jabbar Studios
            </Text>
            is a design
          </Text>
          {aboutUsTextDesktop.map((line, index) => (
            <Text key={index} className="scroll-text">
              <HighlightScroll />
              {line}
            </Text>
          ))}
        </Text>
        <AnimatedDivider />
        <VStack
          spacing={8}
          mt={{ base: 10, xl: 20 }}
          fontSize={{ xl: '3xl', '2xl': '5xl' }}
          fontWeight={200}
        >
          <RevealText margin="-25%">
            <Text>
              We guide new and established companies to high-value marketing
              investments that increase revenue and relevance.
            </Text>
          </RevealText>
          <RevealText margin="-25%">
            <Text>
              Our mission is to develop the strategy, design the materials, and
              assemble the technologies that elevate your identity and
              future-proof your venture.
            </Text>
          </RevealText>
          <RevealText margin="-25%">
            <Text>
              Based out of Dallas, Texas, our team of innovative designers,
              developers, and consultants make creative use of emerging web
              technology and marketing tactics to provide our partners with a
              competitive edge.
            </Text>
          </RevealText>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default AboutUs;
