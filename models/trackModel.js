const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: {
    type: String,

    unique: true,
    required: [true, 'A track must have a title'],
  },
  duration: {
    type: Number,
    required: [true, 'Track must have a duration'],
  },
  poster: {
    type: String,
    unique: true,
    required: [true, 'A track must have a poster'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
