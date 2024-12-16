import React, { useState } from "react";

const DeteksiPenyakitTanaman = () => {
  const [gambar, setGambar] = useState(null);
  const [pratinjauGambar, setPratinjauGambar] = useState(null);
  const [hasil, setHasil] = useState(null);
  const [memuat, setMemuat] = useState(false);

  const handleGambarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGambar(file);
      setPratinjauGambar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gambar) {
      alert("Silakan pilih gambar untuk diunggah.");
      return;
    }

    setMemuat(true);

    const formData = new FormData();
    formData.append("file", gambar);

    try {
      const response = await fetch('/api/deteksi-penyakit', {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      setMemuat(false);

      if (data) {
        setHasil(data);
      } else {
        setHasil({ error: "Tidak dapat memperoleh prediksi." });
      }
    } catch (error) {
      console.error("Kesalahan saat prediksi:", error);
      setMemuat(false);
      setHasil({ error: "Tidak dapat terhubung ke model." });
    }
  };

  return (
    <div className="flex flex-col items-center justify-start px-6 py-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-green-800 text-center mt-20">
        Deteksi Penyakit Tanaman
      </h2>

      {/* Main Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl space-y-6">
        {/* File Input */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleGambarChange}
            className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Image Preview */}
          <div className="mt-4 w-full h-[200px] border border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
            {pratinjauGambar ? (
              <img
                src={pratinjauGambar}
                alt="Gambar yang Dipilih"
                className="max-h-full rounded-md"
              />
            ) : (
              <p className="text-gray-500">Pratinjau gambar akan muncul di sini</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={memuat}
          >
            {memuat ? "Memproses..." : "Deteksi Penyakit"}
          </button>
        </form>

        {/* Detection Results */}
        {hasil && (
          <div className="mt-6">
            {hasil.error ? (
              <p className="text-red-600 font-semibold text-center">
                Kesalahan: {hasil.error}
              </p>
            ) : (
              <div>
                <p className="text-lg font-bold text-green-800 mb-4">
                 1. Prediksi:{" "}
                  <span className="font-semibold">{hasil.predicted_class}</span>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>2. Penyebab:</strong> {hasil.cause}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>3. Penanganan:</strong> {hasil.treatment}
                </p>

                <p className="text-lg font-semibold text-gray-800 mb-2">
                  Probabilitas:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {hasil.probabilities.map((prob, index) => (
                    <li key={index}>
                      persentase {index + 1}: {(prob * 100).toFixed(2)}%
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeteksiPenyakitTanaman;
