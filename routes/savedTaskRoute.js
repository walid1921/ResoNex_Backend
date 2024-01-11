const express = require("express");
const router = express.Router();
const { getSavedTasks, savedTasks, deleteAllTasks } = require("../controllers/savedTaskController");

//! Get all tasks
router.get("/", getSavedTasks);

//! saved tasks
router.post("/", savedTasks);

//! Delete all tasks
router.delete("/", deleteAllTasks);

module.exports = router;
