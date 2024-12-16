const db = require('../config/Database');

// Ambil semua artikel
exports.getArticles = (req, res) => {
  const sql = 'SELECT * FROM articles';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching articles', error: err });
    res.status(200).json(results);
  });
};

// Ambil artikel berdasarkan ID
exports.getArticleById = (req, res) => {
  const sql = 'SELECT * FROM articles WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching article', error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json(results[0]);
  });
};

// Tambahkan artikel baru
exports.createArticle = (req, res) => {
  console.log('Request Body:', req.body); 
  console.log('Uploaded File:', req.file); 
  


  const { title, description, content, author, source } = req.body;

  console.log('Source:', source);
  
  const image_path = req.file ? req.file.path : null;

  if (!title || !content || !source) {
    return res.status(400).json({ message: 'Title, content, and source are required' });
  }

  const sql = `INSERT INTO articles (title, description, content, author, source, image_path)
               VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [title, description, content, author, source, image_path], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating article', error: err });
    res.status(201).json({ message: 'Article created', id: result.insertId });
  });
};

// Update artikel
exports.updateArticle = (req, res) => {
  const { title, description, content, author, source } = req.body;
  const image_path = req.file ? req.file.path : req.body.image_path;

  if (!title || !content || !source) {
    return res.status(400).json({ message: 'Title, content, and source are required' });
  }

  const sql = `UPDATE articles SET title = ?, description = ?, content = ?, author = ?, source = ?, image_path = ?, updated_at = NOW()
               WHERE id = ?`;
  db.query(sql, [title, description, content, author, source, image_path, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating article', error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json({ message: 'Article updated' });
  });
};

// Hapus artikel
exports.deleteArticle = (req, res) => {
  const sql = 'DELETE FROM articles WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting article', error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json({ message: 'Article deleted' });
  });
};
