const SavedTask = require("../models/savedTaskModel");
const asyncHandler = require("express-async-handler");

//! Get all tasks
const getSavedTasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await SavedTask.find({});
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


//! Save tasks
const savedTasks = asyncHandler(async (req, res) => {
  try {
    const { savedDay, percentage, tasks } = req.body;

    const savedTask = await SavedTask.create({
      savedDay,
      percentage,
      tasks: tasks.map((task) => ({
        title: task.title,
        description: task.description,
        status: task.status,
        date: task.date,
        day: task.day,
      })),
    });

    res.status(200).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Delete all tasks
const deleteAllTasks = asyncHandler(async (req, res) => {
  try {
    const deletedTasks = await SavedTask.deleteMany({});
    res.status(200).json(deletedTasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  getSavedTasks,
  savedTasks,
  deleteAllTasks
};
