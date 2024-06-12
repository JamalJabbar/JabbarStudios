import '../index.css';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const SlideReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -15% 0%',
  });

  return (
    <div
      style={{
        position: 'absolute',
        transformOrigin: '100%',
        transform: isInView ? `scaleX(0)` : 'none',
        transition: `all 0.9s cubic-bezier(0.6, 0.01, 0.05, 0.95) 0.9s`,
        background: '#8341e6',
        zIndex: 3,
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
      }}
      ref={ref}
    ></div>
  );
};

export default SlideReveal;
