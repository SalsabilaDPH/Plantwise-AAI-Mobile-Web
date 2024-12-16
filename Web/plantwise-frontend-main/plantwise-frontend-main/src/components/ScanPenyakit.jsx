import React from 'react';
import bgImage from '../assets/img/bg1.png';
import phoneMockup from '../assets/img/phone6.png';
import planIcon from '../assets/img/Vector2.png';
import { Link } from 'react-router-dom';

const ScanPenyakit = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-16"
    style={{ backgroundImage: `url(${bgImage})` }}>

        {/* Main container */}
      <div className="container mx-auto flex flex-col justify-center items-center text-center lg:flex-row lg:text-left lg:items-center lg:space-x-12">
        {/* Left Side: Phone Image */}
        <div className="flex-2 max-w-sm mx-auto lg:max-w-lg mt-12 lg:mt-24 flex justify-center">
          <img
            src={phoneMockup}
            alt="PlantWise App"
            className="w-4/5 max-w-[300px] lg:max-w-full lg:w-full h-auto"
          />
        </div>

          {/* Right Side: Text */}
        <div className="lg:w-1/2 space-y-4 mt-6 lg:mt-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pr-4">
        <Link to="/" className="flex items-center space-x-3">
            <img src={planIcon} alt="Plan icon" className="h-10" />
            <h1 className="text-4xl font-bold text-green-800">Scan Penyakit</h1>
          </Link>

          <h3 className="text-2xl font-bold text-green-800">Scan, Cegah, Rawat. 
            <br/>Tanaman Sehat dalam Genggamanmu!</h3>
          <p className="text-lg text-green-700">
          Banyak tanaman yang kembali sehat berkat perawatan 
          <br/>tepat, kini tumbuh subur dan memperindah lingkungan
          <br/> bersama PlantWise.
            </p>
          <div>
            <Link to="/Download">
              <button className="mt-4 bg-green-800 text-white px-16 py-2 rounded shadow hover:bg-green-700 transition duration-300 ease-in-out">
                Mulai Sekarang
              </button>
            </Link>
          </div>
          
          </div>
        </div>
    </section>
  );
};

export default ScanPenyakit;
