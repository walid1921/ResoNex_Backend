const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
// generate 32 random bytes and then converts them to a hexadecimal string.
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

// npm uninstall react-circle --legacy-peer-deps
// npm uninstall react-circular-progressbar --legacy-peer-deps
//npm uninstall react-progress-bar-plus --legacy-peer-deps

//! user Register

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//! user Login

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, JWT_SECRET, {
        expiresIn: "1d",
      });
      const refreshToken = jwt.sign({ id: user._id }, JWT_REFRESH_SECRET);

      res.status(200).json({ token: token, refreshToken: refreshToken });
    } else {
      res.status(401).json("Invalid Credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! refresh token
const refreshTokens = asyncHandler(async (req, res) => {
  try {
    const refreshToken = req.body.token;

    if (!refreshToken) {
      res.status(403).json("Refresh token is required");
      return;
    }

    let user;

    try {
      user = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    } catch (err) {
      res.status(403).json("Forbidden");
      return;
    }

    if (!user || !user.id) {
      res.status(403).json("Forbidden");
      return;
    }

    const newAccessToken = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ newAccessToken: newAccessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! logout user

const logoutUser = asyncHandler(async (req, res) => {
  try {
    const refreshTokenValue = req.body.token;

    // Log the refreshTokenValue to check its value
    console.log("Attempting to delete refresh token:", refreshTokenValue);

    // Find and delete the refresh token
    const refreshTokenDoc = await RefreshToken.findOneAndDelete({
      token: refreshTokenValue,
    });

    if (!refreshTokenDoc) {
      // Token not found, handle accordingly
      console.log("Refresh token not found in the database");
      res.status(404).json("Refresh token not found");
      return;
    }

    // Successfully logged out
    res.status(200).json("User logged out successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { registerUser, loginUser, refreshTokens, logoutUser };
