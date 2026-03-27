const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve public frontend
app.use(express.static(path.join(__dirname, 'public')));

// Serve admin panel
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/gallery', require('./routes/gallery'));
app.use('/api/contacts', require('./routes/contacts'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
