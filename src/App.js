import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Frases from '../src/pages/Frases';
import Error404 from '../src/pages/Error404';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = { <Frases /> } />
        <Route path="*" element = { <Error404 /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
