const mongoose = require("mongoose");

const savedTaskSchema = new mongoose.Schema({
  savedDay: {
    type: String,
    required: [true, "Saved day is required"],
  },
  percentage: {
    type: Number,
    required: [true, "Percentage is required"],
  },
  tasks: {
    type: [
      {
        title: String,
        description: String,
        date: String,
        status: String,
        day: String,
      },
    ],
    required: [true, "Saved tasks are required"],
  },
});

const SavedTask = mongoose.model("SavedTask", savedTaskSchema);

module.exports = SavedTask;

//! Sample savedTask
// {
//     "savedDay": "03/01/2024 15:33",
//     "percentage": 75,
//     "tasks": [
//       {
//         "title": "Complete Project A",
//         "description": "Finish all the tasks related to Project A.",
//         "status": "Pending",
//         "date": "03/01/2024 14:30",
//         "day": "Wednesday"
//       },
//       {
//         "title": "Review Meeting",
//         "description": "Discuss the project status with the team.",
//         "status": "Pending",
//         "date": "03/01/2024 15:45",
//         "day": "Thursday"
//       }

//     ]
//   }
