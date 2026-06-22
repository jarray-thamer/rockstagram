const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "A post needs a caption"],
      trim: true,
      maxlength: [280, "Keep it short, rocks aren't wordy"], // "Hi ahmed" => 8
    },
    likes: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      trim: true,
      default: "", //optional - paste any image URL, no file upload needed
    },
    rock: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rock", // must EXACTLY match mongoose model 'Rock',
      required: [true, "A post must belong to a rock"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Post", postSchema);
