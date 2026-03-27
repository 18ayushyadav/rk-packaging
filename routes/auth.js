const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const router = express.Router();

// Seed admin account
router.post('/seed', async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new Admin({ username: 'admin', password: hashedPassword });
    await admin.save();
    res.status(201).json({ message: 'Admin account created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, username: admin.username });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
