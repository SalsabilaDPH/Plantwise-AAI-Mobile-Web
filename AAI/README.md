<h1 align="center">  Agrotech / Plantwise </h1>

<p align="center"> 
Plantwise merupakan platform digital berbasis web dan mobile  yang menyediakan informasi komprehensif bagi pecinta tanaman hias di Indonesia. Platform ini mencakup artikel terbaru tentang tren dan perawatan tanaman, kamus tanaman hias yang lengkap, komunitas untuk berinteraksi antar pengguna, informasi cuaca terkini, serta fitur scan penyakit tanaman. 
</p>

<div align="center">
    <!-- Your badges here -->
    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54">
    <img src="https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white">
    <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white">
    <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white">
    <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white">
    <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white">
    <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white">
    <img src="https://img.shields.io/badge/AI%20Model-CNN-blue?style=for-the-badge">
    
</div>

## Teams
  <span><strong>Project Manager:</strong> Raihan Al Arsy</span>

 <h3>AAI Division</h3>

- Muhammad Hadianur Al Rafi (Design Researcher)
- Muhammad Iranda (Scrum Master, Machine Learning Engineer)
- Tri Suci Ramadona (Machine Learning Engineer)
- Salsabila Dwi Putri Hasla (Data Engineer)
- Andhin Nabila Bilbina (Data Engineer)
- Prada Abdul Mufid (Machine Learning Ops)

<h3>Mobile Division</h3>

- Raihan Al Arsy (Project Manager)
- Riko Maulana Al Habib (Hacker, Hipster)
- Fanny Wildan Faudy (Hacker)
- Syahri Ghifari Maulidi (Scrum Master, Hipster)
- Nayla Azizah Zahwa (Hipster)
- Sri Fitrawati (Hipster)

<h3>Web Division</h3>

- Abay Syahputra (Hipster)
- Nila Zahrotul Musthafidah (Scrum Master, Hacker)
- Riezky Fauji Setiawan (Hipster)
- Salma Mesias Gesuri Wk (Hipster)
- Miftahul Farid (Hacker)

## Mentor

- Cindy Febriani

## Idea Background

### 1. Theme
Tema : Tanaman Hias

### 2. Problem
Masalah : Ketertarikan Gen Z dan kalangan pelajar/mahasiswa berusia 18-25 tahun, terhadap perkebunan semakin meningkat. Namun, mereka menghadapi tantangan dalam mengakses platform yang mendukung perawatan tanaman dengan fitur yang sesuai kebutuhan. Meski 50% di antara mereka sering menggunakan smartphone dan 75% bergantung pada internet untuk mencari informasi, platform yang mereka harapkan dapat  memiliki fitur pencarian tanaman, pengingat perawatan, dan deteksi penyakit karena masih sulit ditemukan. 

### 3. Solution
Solusi : Membuat sebuah platform digital atau aplikasi yang menyediakan panduan interaktif tentang tanaman hias. Untuk mengatasi masalah ini, kami mengembangkan sebuah platform berbasis teknologi modern yang menyediakan solusi komprehensif untuk perawatan tanaman. Platform ini dilengkapi fitur deteksi penyakit tanaman menggunakan model CNN, memungkinkan pengguna mendiagnosis kondisi tanaman seperti Healthy, Rust, dan Powdery Mildew hanya dengan mengunggah foto. Selain itu, tersedia sistem rekomendasi tanaman berbasis AI yang memberikan saran tanaman terbaik untuk ditanam berdasarkan suhu, kelembapan, dan pH tanah. Dirancang responsif dan ramah pengguna, platform ini memberikan pengalaman yang terintegrasi dan mudah digunakan oleh generasi muda untuk mendukung hobi berkebun mereka.
## Dataset and Algorithm

### 1. Dataset
- Data Collection <br />
Untuk pengumpulan data, kami menggunakan dua dataset yang diambil dari platform Kaggle:
  - Plant Disease Recognition Dataset: Berisi 87.000+ gambar dari 38 kelas penyakit tanaman dan kondisi sehat. 
  -  Crop Recommendation Dataset: Berisi 2.200 data untuk merekomendasikan tanaman berdasarkan kondisi lingkungan.
-  Data Preparation <br />
   - Plant Disease Dataset:
Data diberi label otomatis berdasarkan nama folder.
Augmentasi dilakukan (rotasi, flip, zoom).
Dataset dibagi: 80% train, 10% validasi, 10% tes. 
   - Crop Recommendation Dataset:
Data dibersihkan dan dinormalisasi.
Dibagi menjadi 70% train dan 30% tes.

### 2. Algorithm

### Deteksi Penyakit Tanaman

#### Framework
Model menggunakan Convolutional Neural Network (CNN) dengan TensorFlow sebagai kerangka utama.

#### Pembangunan Model
- Augmentasi Data: Dilakukan rescaling gambar.
- Parameter Training:
  - Epochs: 20
  - Learning Rate: 0.001
  - Batch Size: 32
  - Optimizer: Adam
- Arsitektur CNN:
  - Layer convolusi dengan filter: 32, 64, dan 128
  - MaxPooling di setiap layer
  - Dropout untuk mencegah overfitting
  - Dense layer untuk klasifikasi dengan softmax (38 kelas).

#### Model Evaluation
Evaluasi dilakukan menggunakan:
- Accuracy
- Loss Curve

### Rekomendasi Tanaman berdasarkan suhu, kelembapan, pH dll

#### Framework
Model dibangun dengan algoritma Machine Learning seperti Decision Tree, Random Forest, Logistic Regression, dan SVM menggunakan Scikit-learn.

#### Pembangunan Model
- Preprocessing Data: Data dinormalisasi sebelum dimasukkan ke model.
- Pembagian Data:
  - 70% untuk training
  - 30% untuk testing
- Model Terbaik dipilih berdasarkan performa Cross Validation Accuracy.

#### Model Evaluation
Model dievaluasi dengan:
- Cross Validation Score
- Accuracy Comparison
- Grafik performa model.


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
