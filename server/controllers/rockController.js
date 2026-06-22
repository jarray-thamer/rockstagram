const Rock = require("../models/Rock");

// @route POST /api/rocks
// @desc Register a new rock
const createRock = async (req, res) => {
  try {
    const rock = await Rock.create(req.body);
    res.status(201).json(rock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @route GET /api/rocks
// @desc Get all rocks, newest first
const getRocks = async (req, res) => {
  try {
    const rocks = await Rock.find().sort({ createdAt: -1 });
    res.status(200).json(rocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/rocks/:id
// @desc Get one rock by id

const getRockById = async (req, res) => {
  try {
    const rock = await Rock.findById(req.params.id);
    if (!rock) {
      return res.status(404).json({ message: "Rock not found" });
    }

    res.status(200).json(rock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/rocks/:id
// @desc Update a rock
const updateRock = async (req, res) => {
  try {
    const rock = await Rock.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the UPDATED doc, not the old one
      runValidators: true, // re-run schema validation on the update
    });
    if (!rock) {
      return res.status(404).json({ message: "Rock not found" });
    }

    res.status(200).json(rock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/rocks/:id
// @desc Delete a rock
const deleteRock = async (req, res) => {
  try {
    const rock = await Rock.findByIdAndDelete(req.params.id);
    if (!rock) {
      return res.status(404).json({ message: "Rock not found" });
    }

    res.status(200).json({ message: "Rock deleted", id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRock, getRocks, getRockById, updateRock, deleteRock };
