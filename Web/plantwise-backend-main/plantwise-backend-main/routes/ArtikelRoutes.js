const express = require('express');
const router = express.Router();
const ArtikelController = require('../controllers/Artikel');
const upload = require('../middleware/upload');

// Article CRUD Routes
router.get('/', ArtikelController.getArticles);  // Get all articles
router.get('/:id', ArtikelController.getArticleById);  // Get article by ID
router.post('/', upload.single('image'), ArtikelController.createArticle);  // Create new article
router.put('/:id', upload.single('image'), ArtikelController.updateArticle);  // Update article
router.delete('/:id', ArtikelController.deleteArticle);  // Delete article

module.exports = router;
