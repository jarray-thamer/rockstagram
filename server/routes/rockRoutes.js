const express = require("express");
const Rock = require("../models/Rock");
const {
  createRock,
  getRocks,
  getRockById,
  updateRock,
  deleteRock,
} = require("../controllers/rockController");

const router = express.Router();

router.route("/").post(createRock).get(getRocks);
router.route("/:id").get(getRockById).put(updateRock).delete(deleteRock);

module.exports = router;
