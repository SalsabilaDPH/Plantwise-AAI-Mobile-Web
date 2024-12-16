// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LandingPage from './pages/LandingPage';
import Kamus from './pages/Kamus';
import Plan from './pages/Plan';
import Scan from './pages/Scan';
import Komun from './pages/Komun';
import Artikel from './pages/Artikel';
import Download from './pages/Download';
import ArtikelDetail from './components/ArtikelDetail';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Smooth animation easing
      once: true, // Ensure animations run only once when scrolled into view
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Artikel" element={<Artikel />} />
        <Route path="/Artikel/:id" element={<ArtikelDetail />} />
        <Route path="/Kamus" element={<Kamus />} />
        <Route path="/Scan" element={<Scan />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/Komun" element={<Komun />} />
        <Route path="/Download" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;
