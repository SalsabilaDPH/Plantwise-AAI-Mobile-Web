from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from PIL import Image

# Inisialisasi Flask
app = Flask(__name__)
CORS(app)

# Load model
model = load_model('model_penyakit.h5')

# Daftar kelas sesuai dengan urutan dalam model Anda
class_names = ['Healthy', 'Powdery', 'Rust']

# Ukuran input gambar yang digunakan model
IMG_SIZE = 128

@app.route('/predict-disease', methods=['POST'])
def predict_disease():
    try:
        # Ambil file gambar dari request
        file = request.files['file']
        if not file:
            return jsonify({"error": "No file provided"}), 400

        # Preprocess gambar
        image = Image.open(file).convert('RGB')  # Pastikan 3 channel (RGB)
        image = image.resize((IMG_SIZE, IMG_SIZE))  # Resize sesuai model
        image_array = np.array(image).astype('float32') / 255.0  # Normalisasi
        image_array = np.expand_dims(image_array, axis=0)  # Tambahkan batch dimension

        # Prediksi
        predictions = model.predict(image_array)
        predicted_class_idx = np.argmax(predictions, axis=1)[0]
        predicted_class = class_names[predicted_class_idx]

        return jsonify({
            "predicted_class": predicted_class,
            "probabilities": predictions[0].tolist()
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Jalankan Flask
if __name__ == '__main__':
    app.run(debug=True)
