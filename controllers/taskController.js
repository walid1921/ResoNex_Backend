const Task = require("../models/taskModel");
const asyncHandler = require("express-async-handler");

//! Get all tasks
const getTasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//! Create a task
const createTask = asyncHandler(async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(200).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Update a task
const updateTask = asyncHandler(async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Delete a task
const deleteTask = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      res.status(404).json({ error: `Task with ID: ${id} not found` });
      return;
    }
    res.status(200).json(deletedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//! Delete all tasks
const deleteAllTasks = asyncHandler(async (req, res) => {
  try {
    const deletedTasks = await Task.deleteMany({});
    res.status(200).json(deletedTasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
};
