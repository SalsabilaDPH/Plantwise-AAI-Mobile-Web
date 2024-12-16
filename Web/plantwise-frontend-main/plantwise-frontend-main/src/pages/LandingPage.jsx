// src/pages/LandingPage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Articles from '../components/Articles';
import Testimonials from '../components/Testimonials';
import DownloadSection from '../components/DownloadSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection />
      <Features />
      <Articles />
      <Testimonials />
      <DownloadSection />
      <Footer/>
    </div>
  );
};

export default LandingPage;
