const express = require('express');
const router = express.Router();
const axios = require('axios');

// Rute untuk rekomendasi-tanaman
router.post('/rekomendasi-tanaman', async (req, res) => {
  const { nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall } = req.body;

  // Validasi
  if (
    nitrogen === undefined ||
    phosphorus === undefined ||
    potassium === undefined ||
    temperature === undefined ||
    humidity === undefined ||
    pH === undefined ||
    rainfall === undefined
  ) {
    return res.status(400).json({ error: 'Semua fitur harus disediakan dalam body permintaan.' });
  }

  try {
    // menyiapkan fitur API
    const features = [
      parseFloat(nitrogen),
      parseFloat(phosphorus),
      parseFloat(potassium),
      parseFloat(temperature),
      parseFloat(humidity),
      parseFloat(pH),
      parseFloat(rainfall),
    ];

    // memanggil external API
    const response = await axios.post(
      'https://crop-recomendation-app.1op3i1mn3x4j.us-south.codeengine.appdomain.cloud/predict-crop',
      { features },
      { headers: { 'Content-Type': 'application/json' } }
    );

    // mengirim external api ke frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during crop recommendation:', error.response?.data || error.message);
    res.status(500).json({ error: 'Gagal mendapatkan rekomendasi tanaman.' });
  }
});

module.exports = router;
