const express = require('express');
const prisma = require('../config/prisma');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// POST submit contact (public)
router.post('/', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    await prisma.contact.create({
      data: { name, phone, message }
    });
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all contacts (admin)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE contact (admin)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await prisma.contact.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    // Prisma will throw error if not found, we can catch or check
    if (error.code === 'P2025') {
       return res.status(404).json({ message: 'Message not found' });
    }
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
