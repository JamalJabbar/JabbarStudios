import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { spring, useVariants } from "./animations/CursorConfig";
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);

  const variants = useVariants(ref);

  // useEffect(() => { # scrolls to top of page on reload
  //   window.history.scrollRestoration = 'manual';
  // }, [location]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <>
      <AnimatePresence>
        {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
        <div className='cursor-container' ref={ref}>
          {/* <motion.div
            variants={variants}
            className="circle"
            animate={cursorVariant}
          >
            <span className="cursorText">{cursorText}</span>
          </motion.div> */}
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage setCursorVariant={setCursorVariant} setCursorText={setCursorText} />}>
              {/* <Route path="page1" element={<Page1 />} /> */}
            </Route>
          </Routes>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
