import '../index.css';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const AnimatedDivider = ({ style }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 70%', 'start 60%'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div style={{ ...style, scaleX }} viewport={{ once: true }} className='animated-divider' ref={ref} />
    );
};

export default AnimatedDivider;
