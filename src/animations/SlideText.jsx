import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../index.css';

const SlideText = ({ children, start, end }) => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 80%', 'start 60%'],
  });

  const slide = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(slide, [0, 1], [start, end]);

  return (
    <motion.div style={{ x }} ref={textRef}>
      {children}
    </motion.div>
  );
};

export default SlideText;
