from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load model yang telah disimpan
rf_model = joblib.load('RandomForest.joblib')

@app.route('/predict-crop', methods=['POST'])
def predict_crop():
    try:
        # Ambil data dari request
        data = request.get_json()
        features = np.array(data['features']).reshape(1, -1)  # Pastikan data dalam format array
        
        # Prediksi
        prediction = rf_model.predict(features)
        
        return jsonify({
            "prediction": prediction[0]
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True)


# {
#   "features": [104, 18, 30, 23.603016, 60.3, 6.7, 140.91]
# }
