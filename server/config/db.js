const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed: ", error.message);
    process.exit(1); // stop the app if we can't reach the DB
  }
};

module.exports = connectDB;
