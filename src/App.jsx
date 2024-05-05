import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, [location]);

  return (
    <>
      <AnimatePresence>
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
