import '../index.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const AnimatedDivider = ({ style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 50%', 'start 40%'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ ...style, scaleX }}
      viewport={{ once: true }}
      className="animated-divider"
      ref={ref}
    />
  );
};

export default AnimatedDivider;
