const mongoose = require("mongoose");

const chartHistorySchema = new mongoose.Schema({
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  weekProgress: {
    type: [
      {
        date: String,
        percentage: Number,
      },
    ],
    required: [true, "Chart History Week Progress are required"],
  },
});

const ChartHistory = mongoose.model("ChartHistory", chartHistorySchema);

module.exports = ChartHistory;