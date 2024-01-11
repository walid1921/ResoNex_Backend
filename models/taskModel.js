const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task title is required']
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: [true, 'Task date is required']
  },
  status: {
    type: String,
    required: [true, 'Task status is required']
  },
  day: {
    type: String,
    required: [true, 'Task day is required']
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
