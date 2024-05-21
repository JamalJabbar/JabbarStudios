import React, { useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, [location]);

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
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />}>
            {/* <Route path="page1" element={<Page1 />} /> */}
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
