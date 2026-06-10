const express = require('express');
const prisma = require('../config/prisma');
const authMiddleware = require('../middleware/auth');
const { upload } = require('../config/cloudinary');

const router = express.Router();

// GET all products (public)
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
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
    
    const product = await prisma.product.create({
      data: {
        name,
        description,
        benefits: benefits || '',
        image: req.file.path // Cloudinary URL
      }
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update product (admin)
router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, benefits } = req.body;
    
    const updateData = { name, description, benefits };
    if (req.file) {
      updateData.image = req.file.path;
    }
    
    const product = await prisma.product.update({
      where: { id },
      data: updateData
    });
    res.json(product);
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ message: 'Product not found' });
    res.status(500).json({ message: error.message });
  }
});

// DELETE product (admin)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.product.delete({ where: { id } });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    if (error.code === 'P2025') return res.status(404).json({ message: 'Product not found' });
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
