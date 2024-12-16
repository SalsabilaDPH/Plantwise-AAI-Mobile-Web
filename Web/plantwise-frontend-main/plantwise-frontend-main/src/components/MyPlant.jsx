import React from 'react';
import bgImage from '../assets/img/bg1.png';
import phoneMockup from '../assets/img/phone4.png';
import planIcon from '../assets/img/Vector.png';
import { Link } from 'react-router-dom';

const MyPlan = () => {
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
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
          <Link to="/" className="flex items-center space-x-3">
            <img src={planIcon} alt="Plan icon" className="h-10" />
            <h1 className="text-3xl lg:text-4xl font-bold text-green-800">My Plant</h1>
          </Link>

          <h3 className="text-xl lg:text-2xl font-bold text-green-800">
            Rencanakan Perawatan Tanamanmu dengan Mudah!
          </h3>

          <p className="text-base lg:text-lg text-green-700 leading-relaxed">
            Catat waktu penyiraman, pemberian pupuk, dan langkah 
            perawatan lainnya. Pastikan tanamanmu tetap sehat dan 
            tumbuh optimal dengan panduan terstruktur. <br /> 
            Bersama PlantWise, merawat tanaman jadi lebih mudah!
          </p>

          <div>
            <Link to="/Download">
              <button className="mt-4 bg-green-800 text-white px-8 lg:px-16 py-2 rounded shadow hover:bg-green-700 transition duration-300 ease-in-out">
                Mulai Sekarang
              </button>
            </Link>
          </div>
        </div>
        </div>
    </section>
  );
};

export default MyPlan;
