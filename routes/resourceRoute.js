const express = require("express");
const router = express.Router();
const {
  getResources,
  createResource,
  deleteAllResources,
  addDataToResource,
} = require("../controllers/resourceController");

//! Get all resources
router.get("/", getResources);

//! Create an resource
router.post("/", createResource);

//! Delete all resources
router.delete("/", deleteAllResources);

//! Add data to a specific resource
router.post("/:resourceId", addDataToResource);

module.exports = router;
