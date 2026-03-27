const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
  image: { type: String, required: true },
  caption: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GalleryImage', galleryImageSchema);
