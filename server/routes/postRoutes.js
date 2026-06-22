const express = require("express");
const Post = require("../models/Post");
const {
  createPost,
  getPosts,
  likePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.route("/").post(createPost).get(getPosts);
router.route("/:id").delete(deletePost);
router.route("/:id/like").put(likePost);

module.exports = router;
