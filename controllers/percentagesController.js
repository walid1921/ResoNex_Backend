const Percentage = require("../models/percentageModel");
const asyncHandler = require("express-async-handler");

//! Get all percentage
const getAllPercentages = asyncHandler(async (req, res) => {
  try {
    const percentages = await Percentage.find({});
    res.status(200).json(percentages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//! Create a percentage
const createPercentage = asyncHandler(async (req, res) => {
  try {
    const newPercentage = await Percentage.create(req.body);
    res.status(200).json(newPercentage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Delete all percentage
const deleteAllPercentages = asyncHandler(async (req, res) => {
  try {
    const deletedPercentages = await Percentage.deleteMany({});
    res.status(200).json(deletedPercentages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = {
  getAllPercentages,
  createPercentage,
  deleteAllPercentages,
};
