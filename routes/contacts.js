const express = require('express');
const Contact = require('../models/Contact');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// POST submit contact (public)
router.post('/', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const contact = new Contact({ name, phone, message });
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all contacts (admin)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE contact (admin)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Message not found' });
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
