import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Reveal = ({ children, slide = -75, delay = 3.6 }) => {
  return (
    <div className="reveal">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: slide },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
