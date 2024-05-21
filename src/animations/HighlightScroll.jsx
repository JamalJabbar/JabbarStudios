import '../index.css';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion';

export default function HighlightScroll() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 70%', 'start 65%']
    });

    const springScale = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scaleX = useTransform(springScale, [0, 1], [1, 0]);

    return (
        <motion.div className='line-mask' style={{ scaleX }} ref={ref} />
    );
}
