const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

//! Get all tasks
router.post("/register", registerUser);

//! Login a User
router.post("/login", loginUser);


module.exports = router;
