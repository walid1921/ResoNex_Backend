const ChartHistory = require("../models/chartHistoryModel");
const asyncHandler = require("express-async-handler");

//! Get all the chart History
const getAllChartHistory = asyncHandler(async (req, res) => {
  try {
    const chartHistory = await ChartHistory.find({});
    res.status(200).json(chartHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//! Save chart History
const createChartHistory = asyncHandler(async (req, res) => {
  try {
    const { duration, weekProgress } = req.body;

    // Ensure that the data for all days of the week exists
    const allDaysExist = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ].every((day) => weekProgress.some((progress) => progress.date === day));

    if (!allDaysExist) {
      // If not all days exist, fill in the missing days with 0 percentage
      const missingDays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ].filter(
        (day) => !weekProgress.some((progress) => progress.date === day)
      );

      weekProgress.push(
        ...missingDays.map((day) => ({ date: day, percentage: 0 }))
      );
    }

    const newChartHistory = await ChartHistory.create(req.body);
    res.status(200).json(newChartHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Delete all the chart History
const deleteAllChartHistory = asyncHandler(async (req, res) => {
  try {
    const deletedChartHistory = await ChartHistory.deleteMany({});
    res.status(200).json(deletedChartHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  getAllChartHistory,
  deleteAllChartHistory,
  createChartHistory,
};
