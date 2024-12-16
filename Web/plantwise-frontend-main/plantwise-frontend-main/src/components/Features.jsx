import React from 'react';
import bgImage from '../assets/img/bgfix.png';
import scanIcon from '../assets/img/scan.png';
import communityIcon from '../assets/img/community.png';
import planIcon from '../assets/img/myplan.png';
import dictionaryIcon from '../assets/img/kamus.png';

const Features = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Title Section */}
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Fitur Utama PlantWise
        </h2>
      </div>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-12 max-w-7xl mx-auto p-6 sm:p-12">
        {/* Feature 1 */}
        <div className="bg-[rgba(221,231,215,1)] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
          <img
            src={scanIcon}
            alt="Scan Penyakit"
            className="h-20 mb-4 -mt-8"
          />
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Scan Penyakit
          </h3>
          <p className="text-center text-gray-700 text-sm">
            Scan, Cegah, Rawat. Tanaman Sehat dalam Genggamanmu!
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[rgba(221,231,215,1)] p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">

          <img
            src={communityIcon}
            alt="Komunitas"
            className="h-20 mb-4 -mt-8"
          />
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Komunitas
          </h3>
          <p className="text-center text-gray-700 text-sm">
            Berbagi, Belajar, dan Tumbuh Bersama!
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[rgba(221,231,215,1)] p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">

          <img src={planIcon} alt="My Plan" className="h-20 mb-4 -mt-8" />
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            My Plan
          </h3>
          <p className="text-center text-gray-700 text-sm">
            Rencanakan Perawatan Tanamanmu!
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-[rgba(221,231,215,1)] p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">

          <img
            src={dictionaryIcon}
            alt="Kamus Tanaman Hias"
            className="h-20 mb-4 -mt-8"
          />
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Kamus Tanaman Hias
          </h3>
          <p className="text-center text-gray-700 text-sm">
            Panduan Lengkap untuk Perawatan Tanamanmu!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
