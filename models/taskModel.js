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

//! Sample task
// {
//   "title": "Complete Project A",
//   "description": "Finish all the tasks related to Project A.",
//   "status": "Pending",
//   "date": "03/01/2024 14:30",  
//   "day": "Wednesday"
// }