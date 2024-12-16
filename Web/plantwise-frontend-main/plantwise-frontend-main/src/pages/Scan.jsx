// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScanPenyakit from '../components/ScanPenyakit';
import DiseaseDetection from '../components/DiseaseDetection';


const Scan = () => {
  return (
    <div>
        <Navbar/>
        <DiseaseDetection/>
      <ScanPenyakit/>
      <Footer/>
    </div>
  );
};

export default Scan;
