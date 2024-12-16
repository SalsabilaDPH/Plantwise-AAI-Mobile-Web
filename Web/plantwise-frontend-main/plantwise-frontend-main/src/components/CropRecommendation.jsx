import React, { useState } from 'react';

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    pH: '',
    rainfall: ''
  });

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Extract form data and validate
    const { nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall } = formData;
  
    if (!nitrogen || !phosphorus || !potassium || !temperature || !humidity || !pH || !rainfall) {
      alert('Harap isi semua bidang.');
      return;
    }
  
    setLoading(true);
  
    try {
      // Prepare the features array
      const features = [
        parseFloat(nitrogen),
        parseFloat(phosphorus),
        parseFloat(potassium),
        parseFloat(temperature),
        parseFloat(humidity),
        parseFloat(pH),
        parseFloat(rainfall)
      ];
  
      // Send request to your backend
      const response = await fetch('/api/rekomendasi-tanaman', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nitrogen: parseFloat(formData.nitrogen),
          phosphorus: parseFloat(formData.phosphorus),
          potassium: parseFloat(formData.potassium),
          temperature: parseFloat(formData.temperature),
          humidity: parseFloat(formData.humidity),
          pH: parseFloat(formData.pH),
          rainfall: parseFloat(formData.rainfall),
        }),
      });
      
      if (!response.ok) {
        throw new Error('Gagal mendapatkan rekomendasi. Silakan coba lagi nanti.');
      }
  
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-6 lg:px-20 py-16 bg-white min-h-screen">
      {/* Left: Form */}
      <div className="w-full max-w-sm mx-auto bg-white p-4 rounded-lg shadow-md mt-20">
  <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Rekomendasi Tanaman</h2>
  <p className="text-gray-600 mb-4 text-sm text-center">
    Masukkan kondisi lingkungan Kamu untuk mengetahui tanaman yang paling cocok! 
  </p>
  <form onSubmit={handleSubmit} className="space-y-3">
    {[
      { name: 'nitrogen', placeholder: 'Nitrogen (kg/ha)' },
      { name: 'phosphorus', placeholder: 'Fosfor (kg/ha)' },
      { name: 'potassium', placeholder: 'Kalium (kg/ha)' },
      { name: 'temperature', placeholder: 'Suhu (°C)' },
      { name: 'humidity', placeholder: 'Kelembaban (%)' },
      { name: 'pH', placeholder: 'Tingkat pH' },
      { name: 'rainfall', placeholder: 'Curah Hujan (mm)' },
    ].map((field, index) => (
      <input
        key={index}
        name={field.name}
        type="number"
        placeholder={field.placeholder}
        value={formData[field.name]} 
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      />
    ))}
    <button
      type="submit"
      className="w-full px-3 py-2 bg-green-800 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      disabled={loading}
    >
      {loading ? 'Memuat...' : 'Dapatkan Rekomendasi'}
    </button>
  </form>
  {prediction && (
    <p className="mt-4 text-sm font-medium text-gray-700 text-center">
      🌱 Tanaman yang Direkomendasikan: <span className="font-semibold">{prediction}</span>
    </p>
  )}
</div>


      {/* Right: Feature Information */}
      <div className="lg:w-1/2 w-full mt-20 lg:mt-12 lg:pl-12 ">
        <h3 className="text-2xl font-bold text-green-700 mb-6">Informasi Fitur</h3>
        <ul className="space-y-6">
          {[
            { icon: '🧪', title: 'Nitrogen', desc: 'Jumlah nitrogen di dalam tanah (kg/ha).' },
            { icon: '🧪', title: 'Fosfor', desc: 'Jumlah fosfor/phosphorus di dalam tanah (kg/ha).' },
            { icon: '🧪', title: 'Kalium', desc: 'Jumlah kalium/potassium di dalam tanah (kg/ha).' },
            { icon: '🌡️', title: 'Suhu', desc: 'Suhu rata-rata lingkungan (°C).' },
            { icon: '💧', title: 'Kelembaban', desc: 'Persentase kelembaban udara (%).' },
            { icon: '⚖️', title: 'pH', desc: 'Tingkat keasaman atau kebasaan tanah.' },
            { icon: '🌧️', title: 'Curah Hujan', desc: 'Jumlah curah hujan (mm).' }
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="w-12 h-12 bg-green-200 text-green-600 rounded-full flex items-center justify-center mr-4">
                {feature.icon}
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CropRecommendation;
