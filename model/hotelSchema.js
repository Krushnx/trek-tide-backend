const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  subtitle: String,
  information: {
    type: String,
    required: true,
    maxlength: 3000, // Maximum 500 characters
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  reviewCount: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  fakePrice: Number,
  features: {
    type: [String],
    default: [],
  },
  mainImage: {
    type: String,
    required: true,
  },
  image2: String,
  image3: String,
  images: {
    type: [String],
    default: [],
  },
  catogary : String,
  link: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
