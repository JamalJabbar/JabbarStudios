import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../index.css';
import GLOBE from 'vanta/src/vanta.globe';
import { Container } from '@chakra-ui/react';
import Reveal from '../animations/Reveal';

const Globe = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 0.5,
          scaleMobile: 1.0,
          color: 0x8341e6,
          size: 1.0,
          backgroundColor: 0x202020,
          color2: 0xffffff,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Reveal delay={0} slide={0}>
      <div className="globe" ref={myRef}>
        <></>
      </div>
    </Reveal>
  );
};

export default Globe;
