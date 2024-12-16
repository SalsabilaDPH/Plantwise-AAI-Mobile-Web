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

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

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

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

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

Disesuaikan dengan kebutuhan atau bisa ditiru dari laporan dokumentasi massive.

## Integration

Disesuaikan dengan kebutuhan atau bisa ditiru dari laporan dokumentasi massive.

## Deployment

Disesuaikan dengan kebutuhan atau bisa ditiru dari laporan dokumentasi massive.

## Result

Disesuaikan dengan kebutuhan atau bisa ditiru dari laporan dokumentasi massive.

## Conclusion

Disesuaikan dengan kebutuhan atau bisa ditiru dari laporan dokumentasi massive.
