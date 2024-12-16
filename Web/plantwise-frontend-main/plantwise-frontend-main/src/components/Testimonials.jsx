import React from 'react';  
import { FaStar } from 'react-icons/fa'; // Import star icon for ratings

const Testimonials = () => {
  return (
    <section className="bg-white mt-32">
      <div className="container mx-auto text-center lg:px-8 mb-24 max-w-7xl p-6 sm:p-12 space-y-6">
        <h2 className="text-3xl font-bold text-green-800 mb-12">Apa Kata Mereka?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              {/* Rating Stars */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Waw! ini sangat membantu
            </h3>
            <p className="text-center text-gray-600">
              Saya tidak perlu lagi khawatir lupa merawat atau merusak tanaman
              karena salah langkah. Bagi pecinta tanaman, aplikasi ini benar-benar
              seperti asisten pribadi yang selalu siap membantu!
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              {/* Rating Stars */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">Luar Biasa!</h3>
            <p className="text-center text-gray-600">
              PlanWise benar-benar membantu saya merawat tanaman hias dengan lebih
              mudah. Aplikasinya mudah digunakan. Saya jadi tidak perlu khawatir
              lagi lupa atau salah merawat. Sangat direkomendasikan untuk pemula
              dan pecinta tanaman hias!
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              {/* Rating Stars */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Waw! ini sangat membantu
            </h3>
            <p className="text-center text-gray-600">
              Saya tidak perlu lagi khawatir lupa merawat atau merusak tanaman
              karena salah langkah. Bagi pecinta tanaman, aplikasi ini benar-benar
              seperti asisten pribadi yang selalu siap membantu!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
