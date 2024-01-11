const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
} = require("../controllers/taskController");

//! Get all tasks
router.get("/", getTasks);

//! Create a task
router.post("/", createTask);

//! Update a task
router.put("/:id", updateTask);

// //! Delete a task
router.delete("/:id", deleteTask);

//!  Delete all tasks
router.delete("/", deleteAllTasks);

// //! Get a single task
// router.get('/:id', getTask)

module.exports = router;
