const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Use in-memory MongoDB for simplicity in this example
    // In production, you would use a real MongoDB instance
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://thanuja:bQfhKo9Rk8jX34Ym@cluster0.0ckqiu2.mongodb.net/ctse_db');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;