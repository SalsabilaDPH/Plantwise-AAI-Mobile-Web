// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import KamusTanaman from '../components/KamusTanaman';
import CropRecommendation from '../components/CropRecommendation';



const Kamus = () => {
  return (
    <div>
        <Navbar/>
        <CropRecommendation/>
      <KamusTanaman/>
      <Footer/>
    </div>
  );
};

export default Kamus;
