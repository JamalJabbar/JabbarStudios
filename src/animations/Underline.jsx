import { VStack } from '@chakra-ui/react';
import { motion, useAnimate } from 'framer-motion';

const Underline = ({ children, underlineColor }) => {
  const [scope, animate] = useAnimate();

  const sequence = [
    ['div', { width: '0%' }, { duration: 0.2 }],
    ['div', { width: '100%' }, { ease: 'easeInOut' }],
  ];

  const underline = () => {
    animate(sequence);
  };

  return (
    <VStack onMouseEnter={underline} ref={scope}>
      {children}
      <div style={{ backgroundColor: underlineColor }} className="underline" />
    </VStack>
  );
};

export default Underline;
