const mongoose = require("mongoose");

const percentageSchema = new mongoose.Schema({
  percentage: {
    type: Number,
    required: [true, "Percentage is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
});

const Percentage = mongoose.model("Percentage", percentageSchema);
module.exports = Percentage;
