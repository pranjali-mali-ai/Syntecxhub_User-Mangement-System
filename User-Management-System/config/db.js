// config/db.js
const mongoose = require('mongoose');

// Function to connect to MongoDB Atlas
const connectDB = async () => {
  try {
    // Attempt to connect using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    // Log error if connection fails
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
