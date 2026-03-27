const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const GalleryImage = require('../models/GalleryImage');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '..', 'uploads', 'gallery');
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

// GET all gallery images (public)
router.get('/', async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST upload image (admin)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'Image is required' });
    const galleryImage = new GalleryImage({
      image: '/uploads/gallery/' + req.file.filename,
      caption: req.body.caption || ''
    });
    await galleryImage.save();
    res.status(201).json(galleryImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE gallery image (admin)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const img = await GalleryImage.findByIdAndDelete(req.params.id);
    if (!img) return res.status(404).json({ message: 'Image not found' });
    if (img.image) {
      const imgPath = path.join(__dirname, '..', img.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }
    res.json({ message: 'Image deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
