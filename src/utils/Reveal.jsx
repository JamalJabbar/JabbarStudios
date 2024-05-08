import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

export default function Reveal({ children, slide = -75 }) {
  return (
    <div className="reveal">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: slide },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 3.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
