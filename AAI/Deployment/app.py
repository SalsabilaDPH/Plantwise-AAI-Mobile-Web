from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS class from flask_cors module
import tensorflow as tf
import numpy as np

app = Flask(__name__)
CORS(app)  # Apply CORS to the app

# Load the SavedModels=
model_lstm = tf.saved_model.load("saved_model_lstm")
model_lstm_attention = tf.saved_model.load("saved_model_lstm_attention")

# Print model summaries
# Print some basic information about the loaded models
print("Model information - LSTM: \t")
print(model_lstm.signatures)

print("Model information - LSTM with Attention: \t")
print(model_lstm_attention.signatures)


# Function to preprocess input data
def preprocess_input_data(data):
    features = ['Tavg', 'RH_avg', 'ss', 'ff_avg']
    X = np.array([[data[feature] for feature in features]])
    return X

@app.route('/')
def home():
    return 'Hello World!'
    
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    print("Received JSON data:", data) 
    
    # Preprocess input data
    def preprocess_input_data(data):
        features = ['Tavg', 'RH_avg', 'ss', 'ff_avg']
        # Convert string values to floating-point numbers
        X = np.array([[float(day[feature]) for feature in features] for day in data['input']])
        # Reshape input tensor to match the expected shape
        X = X.reshape(-1, 10, 4).astype(np.float32)
        return X
    
    # Preprocess input data
    X = preprocess_input_data(data)
    
    # Make predictions using the models
    predictions_lstm = model_lstm.signatures['serving_default'](lstm_input=X)['dense'].numpy()
    predictions_lstm_attention = model_lstm_attention.signatures['serving_default'](input_1=X)['dense_1'].numpy()
    
    # Prepare the response
    response = {
        'predictions_lstm': predictions_lstm.tolist(),
        'predictions_lstm_attention': predictions_lstm_attention.tolist()
    }
    
    return jsonify(response)



if __name__ == '__main__':
    app.run(debug=True)
