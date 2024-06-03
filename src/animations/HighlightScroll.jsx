import '../index.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';

const HighlightScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 50%', 'start 45%'],
  });

  const springScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleX = useTransform(springScale, [0, 1], [1, 0]);

  return <motion.div className="line-mask" style={{ scaleX }} ref={ref} />;
};

export default HighlightScroll;
