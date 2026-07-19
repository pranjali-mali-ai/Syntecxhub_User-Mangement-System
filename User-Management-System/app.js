// app.js

// Load environment variables from .env file
require('dotenv').config();

// Import express framework
const express = require('express');

// Import database connection function
const connectDB = require('./config/db');

// Import user routes
const userRoutes = require('./routes/userRoutes');

// Initialize Express app
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Basic Route for testing server
app.get('/', (req, res) => {
  res.send("User Management System API is running...");
});

// User API Routes
app.use('/api/users', userRoutes);

// 404 Handler - for routes that don't exist
app.use((req, res) => {
  res.status(404).json({ message: "Not Found: Route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Set Port and Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
