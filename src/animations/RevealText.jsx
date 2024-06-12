import '../index.css';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const RevealText = ({
  style,
  children,
  translate = 75,
  delay = 0.3,
  margin = '0%',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px ${margin} 0px`,
  });

  return (
    <div
      style={{
        transform: isInView ? 'none' : `translateY(${translate}px)`,
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.6, 0.01, 0.05, 0.95) ${delay}s`,
        ...style,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default RevealText;
