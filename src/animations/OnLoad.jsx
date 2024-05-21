import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import '../index.css';
import { background } from '@chakra-ui/react';

export default function OnLoad({ cleanup }) {
  const [scope, animate] = useAnimate();

  const sequence = [
    [
      '#background',
      {
        clipPath: 'polygon(50% 50%, 50% 50%, 50% 51%, 50% 51%)',
      },
    ],
    [
      '#background',
      {
        clipPath: 'polygon(0 50%, 100% 50%, 100% 51%, 0 51%)',
      },
      { duration: 0.5, delay: 0.5, ease: [0.1, 0.75, 0.9, 1] },
    ],
    [
      '#background',
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      },
      {
        duration: 0.5,
        delay: 0.25,
        ease: 'easeOut',
      },
    ],
    [
      {
        duration: 0.5,
        delay: 0.25,
        ease: 'easeOut',
      },
    ],
    [
      '#image',
      {
        opacity: 1,
      },
      {
        at: 1.8,
      },
    ],
    [
      '#background',
      {
        clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
      },
      {
        duration: 0.6,
        delay: 0.7,
        ease: [0.1, 0.75, 0.9, 1],
      },
    ],
    [
      '#container',
      {
        opacity: 0,
      },
    ],
    [
      '#image',
      {
        opacity: 0,
      },
      {
        at: '-.95',
      },
    ],
  ];

  useEffect(() => {
    const playAnimation = async () => {
      const animation = animate(sequence);
      await animation
      console.log("Animation complete.")
      cleanup(false)
    }

    playAnimation()
  }, []);

  return (
    <div className="on-load-container" ref={scope}>
      <div className="load-background" id="container"></div>
      <div className="on-load" id="background"></div>;
      <img id="image" className="on-load-logo" src="/jabbar-studios.svg"></img>
    </div>
  );
}
