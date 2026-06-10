const express = require('express');
const prisma = require('../config/prisma');
const authMiddleware = require('../middleware/auth');
const { upload } = require('../config/cloudinary');

const router = express.Router();

// GET all gallery images (public)
router.get('/', async (req, res) => {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST upload image (admin)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'Image is required' });
    
    const galleryImage = await prisma.galleryImage.create({
      data: {
        image: req.file.path,
        caption: req.body.caption || ''
      }
    });
    res.status(201).json(galleryImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE gallery image (admin)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.galleryImage.delete({ where: { id } });
    res.json({ message: 'Image deleted' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ message: 'Image not found' });
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
