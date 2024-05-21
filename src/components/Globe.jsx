import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../index.css';
import GLOBE from 'vanta/src/vanta.globe';
import { Container } from '@chakra-ui/react';
import Reveal from '../animations/Reveal';

export default function Globe() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: false,
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
    <div className="globe" ref={myRef}>
      <></>
    </div>
  );
}
