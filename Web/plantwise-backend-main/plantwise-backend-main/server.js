const express = require('express');
const cors = require('cors');
const artikelRoutes = require('./routes/ArtikelRoutes');
const aiRoutes = require('./routes/AiRoutes'); 
const diseaseRoutes = require('./routes/DiseaseRoutes');  

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));  
app.use(express.urlencoded({ extended: true }));


app.use('/api/articles', artikelRoutes); 
app.use('/api', aiRoutes);  
app.use('/api', diseaseRoutes);  


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

