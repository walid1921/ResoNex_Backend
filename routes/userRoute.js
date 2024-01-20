const express = require("express");
const router = express.Router();
const { registerUser, loginUser, refreshTokens, logoutUser} = require("../controllers/userController");

//! Get all users
router.post("/register", registerUser);

//! Login a User
router.post("/login", loginUser);

//! refresh token
router.post("/token", refreshTokens)

//! logout user
router.delete("/logout", logoutUser)


module.exports = router;
