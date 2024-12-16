const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/deteksi-penyakit', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded.' });
  }

  try {
    // menyiapkan form-data dengan upload image
    const formData = new FormData();
    formData.append('file', req.file.buffer, req.file.originalname);

    // mengirim image ke external AI API
    const response = await axios.post(
      'https://image-detection.1osr27zdk703.us-south.codeengine.appdomain.cloud/predict-disease',
      formData,
      { headers: { ...formData.getHeaders() } }
    );

    // melanjutkan respon AI ke frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during disease detection:', error.message);
    res.status(500).json({ error: 'Failed to process the image.' });
  }
});

module.exports = router;
