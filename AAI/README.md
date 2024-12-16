<div align="center">
    
# PlantWise - Advanced AI Division

**Advanced AI Division Documentation for PlantWise**
</div>

<div align="center">
    <!-- Your badges here -->
    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54">
    <img src="https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white">
    <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white">
    <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white">
    <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white">
    <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white">
    <img src="https://img.shields.io/badge/CNN-%23FF6F61.svg?style=for-the-badge&logo=ai&logoColor=white">
    <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white">
    <img src="https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white">
    <img src="https://img.shields.io/badge/IBM%20Cloud-%230D74FF.svg?style=for-the-badge&logo=ibmcloud&logoColor=white">
</div>

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## Team AAI Division

- **Muhammad Hadianur Al Rafi** (Design Researcher)
- **Muhammad Iranda** (Scrum Master, Machine Learning Engineer)
- **Tri Suci Ramadona** (Machine Learning Engineer)
- **Salsabila Dwi Putri Hasla** (Data Engineer)
- **Andhin Nabila Bilbina** (Data Engineer)
- **Prada Abdul Mufid** (Machine Learning Ops)

### Mentor
- **Cindy Febriani**

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## Idea Background

### 1. Theme
**Agriculture - Tanaman Hias**

### 2. Problem
<p align="justify">
Ketertarikan Gen Z dan kalangan pelajar/mahasiswa berusia 18-25 tahun terhadap perkebunan semakin meningkat. Namun, mereka menghadapi tantangan dalam mengakses platform yang mendukung perawatan tanaman dengan fitur yang sesuai kebutuhan. Meski 50% di antaranya sering menggunakan smartphone dan 75% bergantung pada internet untuk mencari informasi, platform yang diharapkan memiliki fitur pencarian tanaman, pengingat perawatan, dan deteksi penyakit tanaman masih sulit ditemukan.
</p>

### 3. Solution
<p align="justify">
Membangun platform digital atau aplikasi yang menyediakan panduan interaktif tentang tanaman hias. Platform ini dilengkapi dengan fitur deteksi penyakit tanaman menggunakan model CNN, memungkinkan pengguna mendiagnosis kondisi tanaman (seperti Healthy, Rust, dan Powdery Mildew) hanya dengan mengunggah foto. Fitur lainnya termasuk sistem rekomendasi tanaman berbasis AI yang memberikan saran tanaman terbaik untuk ditanam berdasarkan suhu, kelembapan, dan pH tanah. Platform ini dirancang responsif dan ramah pengguna untuk mendukung hobi berkebun generasi muda.
</p>
✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## Dataset and Algorithm

### 1. Dataset

#### -> Data Collection
Dua dataset digunakan untuk pengumpulan data:
- **Plant Disease Recognition Dataset**: Berisi lebih dari 87.000 gambar dari 38 kelas penyakit tanaman dan kondisi sehat.
- **Crop Recommendation Dataset**: Berisi 2.200 data untuk merekomendasikan tanaman berdasarkan kondisi lingkungan.

#### -> Data Preparation

- **Plant Disease Dataset**:
  - Labeling otomatis berdasarkan nama folder.
  - Augmentasi gambar (rotasi, flip, zoom).
  - Dataset dibagi menjadi:
    - 80% untuk pelatihan (training)
    - 10% untuk validasi (validation)
    - 10% untuk pengujian (testing)

- **Crop Recommendation Dataset**:
  - Pembersihan dan normalisasi data.
  - Dataset dibagi menjadi:
    - 70% untuk pelatihan (training)
    - 30% untuk pengujian (testing)

---

### 2. Algoritma

#### *Deteksi Penyakit Tanaman*

##### -> Framework
Model menggunakan **Convolutional Neural Network (CNN)** dengan **TensorFlow** sebagai kerangka utama.

##### -> Pembangunan Model
- **Augmentasi Data**: Rescaling gambar dilakukan.
- **Parameter Training**:
  - Epochs: 20
  - Learning Rate: 0.001
  - Batch Size: 32
  - Optimizer: Adam
- **Arsitektur CNN**:
  - Layer convolusi dengan filter: 32, 64, dan 128.
  - MaxPooling di setiap layer.
  - Dropout untuk mencegah overfitting.
  - Dense layer dengan fungsi aktivasi softmax (38 kelas).

##### -> Model Evaluation
Evaluasi menggunakan:
- **Accuracy**
- **Loss Curve**

---

#### *Rekomendasi Tanaman Berdasarkan Suhu, Kelembapan, pH, dll.*

##### -> Framework
Model dibangun dengan algoritma **Machine Learning** seperti **Decision Tree**, **Random Forest**, **Logistic Regression**, dan **SVM** menggunakan **Scikit-learn**.

##### -> Pembangunan Model
- **Preprocessing Data**: Data dinormalisasi.
- **Pembagian Data**:
  - 70% untuk pelatihan (training)
  - 30% untuk pengujian (testing)
- Model terbaik dipilih berdasarkan **Cross Validation Accuracy**.

##### -> Model Evaluation
Model dievaluasi dengan:
- **Cross Validation Score**
- **Perbandingan Akurasi**
- **Grafik Performa Model**

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## Prototype

### 1. **Frontend Prototype (Antarmuka Pengguna)**
Frontend dari aplikasi ini dibangun menggunakan **Vite.js** dan **Tailwind CSS** untuk memberikan pengalaman pengguna yang responsif dan cepat. Pengguna dapat mengunggah gambar tanaman dan memasukkan parameter lingkungan melalui antarmuka pengguna yang sederhana.

#### Alur dan Struktur Frontend:
- **Halaman Utama**:
  - Pengguna dapat mengunggah gambar tanaman melalui tombol **Upload Gambar**.
  - Pengguna dapat memasukkan parameter lingkungan (Suhu, Kelembapan, pH Tanah) melalui form input.
  - Setelah mengisi data, pengguna menekan tombol **Kirim Data** untuk mengirimkan gambar dan parameter ke backend.

- **Halaman Hasil**:
  - Setelah data dikirim, aplikasi akan menampilkan:
    - **Hasil Deteksi Penyakit Tanaman**: Menampilkan penyakit yang terdeteksi (misalnya, "Rust", "Powdery Mildew", atau "Healthy").
    - **Rekomendasi Tanaman**: Berdasarkan parameter lingkungan yang dimasukkan, aplikasi akan memberikan daftar tanaman yang cocok.

---

### 2. **Backend Prototype (Logika Aplikasi dan Integrasi Model AI)**

Backend dari aplikasi ini berfungsi untuk memproses data yang dikirimkan oleh pengguna (gambar tanaman dan parameter lingkungan), menjalankan model AI untuk deteksi penyakit dan rekomendasi tanaman, kemudian mengembalikan hasil kepada frontend. Backend menggunakan **Flask** sebagai framework API dan **TensorFlow** untuk pemrosesan model AI.

#### 2.1 **Struktur Backend**
Backend terdiri dari beberapa bagian utama:
- **API Endpoints**: Endpoint yang menerima data dari frontend dan mengembalikan hasil analisis.
- **Model AI**: Menggunakan model **Convolutional Neural Networks (CNN)** untuk mendeteksi penyakit pada tanaman dan model lainnya untuk memberikan rekomendasi tanaman berdasarkan parameter lingkungan.
- **Proses Gambar**: Backend akan memproses gambar tanaman yang diunggah oleh pengguna agar dapat diproses oleh model AI.

#### 2.2 **Struktur API**
Backend memiliki dua endpoint utama yang diakses oleh frontend untuk mendapatkan hasil:
1. **`/deteksi-penyakit`**: Untuk mendeteksi penyakit pada tanaman dari gambar yang diunggah.
2. **`/rekomendasi-tanaman`**: Untuk memberikan rekomendasi tanaman berdasarkan parameter lingkungan yang dimasukkan oleh pengguna.

#### 2.3 **Contoh Kode Backend**
Berikut adalah kode untuk backend menggunakan Flask yang mengintegrasikan model AI:

```bash
from flask import Flask, request, jsonify
import tensorflow as tf
import joblib
from PIL import Image
import numpy as np
import io

app = Flask(__name__)

# Load Model AI
model_penyakit = tf.keras.models.load_model('model_penyakit.h5')  # Model untuk deteksi penyakit tanaman
model_rekomendasi = joblib.load('model_rekomendasi.pkl')  # Model untuk rekomendasi tanaman

@app.route('/deteksi-penyakit', methods=['POST'])
def deteksi_penyakit():
    # Mendapatkan gambar tanaman dari permintaan
    file = request.files['image']
    
    # Proses gambar menjadi format yang bisa diterima model
    image = Image.open(file)
    image = image.resize((224, 224))  # Ukuran gambar untuk input model
    image_array = np.array(image) / 255.0  # Normalisasi gambar
    image_array = np.expand_dims(image_array, axis=0)  # Menambah dimensi batch
    
    # Prediksi penyakit tanaman menggunakan model
    hasil = model_penyakit.predict(image_array)
    label = np.argmax(hasil, axis=1)  # Menentukan label penyakit tanaman
    
    # Menentukan hasil deteksi penyakit
    if label == 0:
        return jsonify({'penyakit': 'Rust'})
    elif label == 1:
        return jsonify({'penyakit': 'Powdery Mildew'})
    else:
        return jsonify({'penyakit': 'Healthy'})

@app.route('/rekomendasi-tanaman', methods=['POST'])
def rekomendasi_tanaman():
    # Mendapatkan data parameter lingkungan dari permintaan
    data = request.json
    suhu = data['suhu']
    kelembapan = data['kelembapan']
    ph = data['ph']
    
    # Memasukkan parameter lingkungan ke dalam model rekomendasi tanaman
    rekomendasi = model_rekomendasi.predict([[suhu, kelembapan, ph]])
    
    # Mengembalikan rekomendasi tanaman
    rekomendasi_tanaman = rekomendasi[0]  # Mengambil hasil dari prediksi model
    return jsonify({'rekomendasi': rekomendasi_tanaman.tolist()})

def process_image(image):
    # Fungsi untuk memproses gambar menjadi format yang bisa diterima model
    image = Image.open(image)
    image = image.resize((224, 224))  # Menyesuaikan ukuran gambar
    image = np.array(image) / 255.0  # Normalisasi gambar
    return np.expand_dims(image, axis=0)

if __name__ == '__main__':
    app.run(debug=True)
```
---

### 3. **Integrasi Frontend dan Backend**
Frontend dan backend diintegrasikan dengan cara:

- **Frontend mengirimkan gambar tanaman** ke endpoint `POST /deteksi-penyakit` untuk memulai deteksi penyakit.
- **Frontend mengirimkan parameter lingkungan** ke endpoint `POST /rekomendasi-tanaman` untuk mendapatkan rekomendasi tanaman.
- **Backend memproses data** dan mengirimkan respons dalam format JSON yang berisi hasil deteksi penyakit dan rekomendasi tanaman kembali ke frontend.

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## Integration

Integrasi dalam proyek **PlantWise** melibatkan penyatuan berbagai komponen aplikasi untuk menciptakan alur kerja yang mulus antara antarmuka pengguna, backend, dan model AI yang digunakan. Berikut adalah penjelasan lebih rinci mengenai bagaimana komponen-komponen ini bekerja bersama-sama:

### 1. Struktur Sistem
PlantWise terdiri dari dua lapisan utama:
- **Backend:**
  - Dibangun menggunakan framework **Flask** untuk mengatur logika aplikasi dan melayani permintaan API.
  - Backend menerima data dari frontend, memprosesnya menggunakan model AI, dan mengembalikan hasil kepada pengguna.

- **Model AI:**
  - Menggunakan model **Convolutional Neural Network (CNN)** untuk deteksi penyakit tanaman.
  - Menggunakan **Random Forest** untuk rekomendasi tanaman berdasarkan parameter lingkungan yang diberikan.
  - Model dideploy menggunakan **TensorFlow Serving** atau framework lainnya yang mendukung penyajian model machine learning.

---

### 2. Alur Kerja Sistem
1. **Pengguna mengunggah gambar tanaman atau memasukkan parameter lingkungan.**
   - Gambar tanaman diunggah melalui antarmuka frontend.
   - Parameter seperti suhu, kelembapan, dan pH tanah dimasukkan oleh pengguna.

2. **Frontend mengirimkan data ke backend melalui API.**
   - Setelah pengguna mengirimkan data, permintaan HTTP POST dikirim ke backend dengan data gambar atau parameter lingkungan.

3. **Backend memproses data:**
   - Backend mengirim gambar tanaman ke model AI berbasis CNN untuk mendiagnosis penyakit tanaman.
   - Parameter lingkungan digunakan oleh model **Random Forest** untuk memberikan rekomendasi tanaman yang sesuai dengan kondisi tersebut.

4. **Backend mengirimkan hasil ke frontend.**
   - Hasil deteksi penyakit tanaman (misalnya: "Healthy", "Rust", atau "Powdery Mildew") atau rekomendasi tanaman dikembalikan dalam format JSON.

5. **Frontend menampilkan hasil kepada pengguna.**
   - Hasil dari backend ditampilkan dalam bentuk yang mudah dipahami oleh pengguna melalui antarmuka yang responsif.

---

### 3. Tools yang Digunakan untuk Integrasi
- **REST API:** Dibangun dengan **Flask** untuk komunikasi antara frontend dan backend.
- **TensorFlow Serving:** Untuk hosting dan penyajian model CNN untuk deteksi penyakit tanaman.
- **Scikit-learn:** Digunakan untuk algoritma rekomendasi tanaman di backend.
- **Database (Opsional):** **SQLite** atau **PostgreSQL** digunakan untuk menyimpan data pengguna dan riwayat interaksi (jika diperlukan).
- **Frontend Framework:** **Vite.js** untuk pengembangan frontend yang cepat dan modern.
- **Deployment Platform:** **IBM Cloud** atau platform cloud lainnya digunakan untuk hosting backend dan model AI.

---

### 4. Langkah-Langkah Pengujian Integrasi
- **Unit Testing:**  
  Setiap komponen (frontend, backend, dan model AI) diuji secara terpisah untuk memastikan fungsionalitas masing-masing.
  
- **Integration Testing:**  
  Memastikan komunikasi antara frontend, backend, dan model AI berfungsi dengan baik. Tes ini memverifikasi bahwa data yang dikirimkan dan diterima antar komponen berjalan sesuai rencana.
  
- **End-to-End Testing:**
  Menguji seluruh alur sistem dari awal hingga akhir, mulai dari input pengguna hingga hasil yang ditampilkan untuk memastikan aplikasi berfungsi seperti yang diinginkan.

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## Deployment

Disesuaikan dengan kebutuhan atau bisa ditiru dari laporan dokumentasi massive.

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## **Result**

1. **Deteksi Penyakit Tanaman (Plant Disease Detection):**  
   - Model **Convolutional Neural Network (CNN)** berhasil mendeteksi penyakit tanaman dengan akurasi **92.5%**.  
   - Deteksi berhasil untuk berbagai kategori seperti: *Healthy*, *Rust*, dan *Powdery Mildew*.  
   - Waktu respons: **< ± 4 detik** untuk proses deteksi gambar.  

2. **Rekomendasi Tanaman (Crop Recommendation):**  
   - Menggunakan algoritma **Random Forest** dengan akurasi **89.7%** pada validasi silang.  
   - Rekomendasi didasarkan pada parameter seperti suhu, kelembapan, dan pH tanah.  
   - Waktu respons: **< ± 4 detik** untuk rekomendasi berdasarkan input.  

3. **Platform Interaktif:**  
   - Dikembangkan dengan **Flask** (backend).  
   - Responsif dan mudah digunakan di berbagai perangkat.  

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

## Conclusion

1. **Keberhasilan Implementasi:**  
   - PlantWise berhasil memberikan solusi praktis untuk penggemar tanaman hias, dengan fitur-fitur berbasis AI yang andal.  

2. **Efisiensi dan Akurasi:**  
   - Model CNN dan Random Forest memberikan hasil yang akurat dan dapat diandalkan.  

3. **Dampak Positif:**  
   - Meningkatkan kesadaran tentang pentingnya perawatan tanaman secara modern.  
   - Mendukung penggemar tanaman dalam membuat keputusan yang lebih baik.  

4. **Rekomendasi Pengembangan:**  
   - Menambahkan fitur prediksi cuaca untuk memberikan saran perawatan tanaman.  
   - Menyediakan sistem notifikasi untuk jadwal penyiraman dan pemupukan.  
   - Mengembangkan aplikasi versi mobile untuk menjangkau lebih banyak pengguna.  

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦
