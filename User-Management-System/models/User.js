// models/User.js
const mongoose = require('mongoose');

// Define the User schema with timestamps enabled
// timestamps: true automatically adds createdAt and updatedAt fields
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// Export the User model
module.exports = mongoose.model('User', userSchema);
