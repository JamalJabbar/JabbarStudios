import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import App from './App';
import './index.css';

const breakpoints = {
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'M PLUS 1',
        color: 'white',
        bg: '#202020',
      },
    },
  },
  ...breakpoints
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
