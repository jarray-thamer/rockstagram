const mongoose = require("mongoose");

const rockShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Every rock deserves a name"],
      trim: true,
    },
    bio: {
      type: String,
      default: "Just a rock, living its best life.",
      trim: true,
    },
    mood: {
      type: String,
      enum: ["Stoic", "Chill", "Dramatic", "Sleepy", "Adventurous", "Happy"],
      default: "Chill",
    },
    foundLocation: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      default: "🪨",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Rock", rockShema);
