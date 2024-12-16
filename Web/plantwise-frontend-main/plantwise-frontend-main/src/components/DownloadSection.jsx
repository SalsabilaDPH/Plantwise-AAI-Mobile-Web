// src/components/DownloadSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import bgImage from '../assets/img/bg3.png';
import appstore from '../assets/img/appstore.png'; // Path to App Store image
import playstore from '../assets/img/playstore.png'; // Path to Play Store image
import phoneMockup from '../assets/img/phone3.png'; // Path to phone mockup image

const DownloadSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-2"
    style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        
        {/* Left side: Phone Mockup */}
        <div className="flex-2 max-w-md mx-auto lg:max-w-lg">
          <img 
            src={phoneMockup}
            alt="PlantWise App" 
            className="w-full h-auto"
          />
        </div>

        {/* Right side: Text and Download Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          {/* Navigation Links as Buttons */}
          <div className="space-x-2 mb-6">
          <Link to="/scan" className="bg-white text-green-700 px-6 py-2 rounded-lg text-sm shadow-md hover:bg-green-100 transition duration-300">
              Scan Penyakit
            </Link>
            <Link to="/komun" className="bg-white text-green-700 px-6 py-2 rounded-lg text-sm shadow-md hover:bg-green-100 transition duration-300">
                  Komunitas   
            </Link>
            </div>
            <div className="space-x-2 mb-6">
            <Link to="/plan" className="bg-white text-green-700 px-6 py-2 rounded-lg text-sm shadow-md hover:bg-green-100 transition duration-300">
              My Plant
            </Link>
            <Link to="/kamus" className="bg-white text-green-700 px-6 py-2 rounded-lg text-sm shadow-md hover:bg-green-100 transition duration-300">
              Kamus Tanaman Hias
            </Link>
          </div>
          <br/>
          <h2 className="text-3xl font-bold text-green-700">
            Download PlantWise 
            <br/>untuk Tanaman Hias mu!
          </h2>
          <p className="text-lg text-green-800">
            PlantWise - Solusi cerdas untuk tanaman hias.
          </p>
          <br/>
          {/* Download Buttons */}
          <div className="flex space-x-4 justify-center lg:justify-start mt-6">
            
            <a 
              href="https://play.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-105"
            >
              <img src={playstore} alt="Get it on Play Store" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
