const mongoose = require('mongoose');

const savedTaskSchema = new mongoose.Schema({
  savedDay: {
    type: String,
    required: [true, 'Saved day is required']
  },
  percentage: {
    type: Number,
    required: [true, 'Percentage is required']
  },
  tasks: {
    type: [
      {
        title: String,
        description: String,
        date: String,
        status: String,
        day: String
      }
    ],
    required: [true, 'Saved tasks are required']
  }
});

const SavedTask = mongoose.model('SavedTask', savedTaskSchema);

module.exports = SavedTask;
