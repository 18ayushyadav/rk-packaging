const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '..', 'uploads', 'products');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
  }
});
const upload = multer({ storage, fileFilter: (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  cb(null, ext && mime);
}});

// GET all products (public)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create product (admin)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, description, benefits } = req.body;
    if (!req.file) return res.status(400).json({ message: 'Image is required' });
    const product = new Product({
      name,
      description,
      benefits: benefits || '',
      image: '/uploads/products/' + req.file.filename
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update product (admin)
router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, description, benefits } = req.body;
    const update = { name, description, benefits };
    if (req.file) {
      // Delete old image
      const old = await Product.findById(req.params.id);
      if (old && old.image) {
        const oldPath = path.join(__dirname, '..', old.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      update.image = '/uploads/products/' + req.file.filename;
    }
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE product (admin)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    // Delete image file
    if (product.image) {
      const imgPath = path.join(__dirname, '..', product.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
