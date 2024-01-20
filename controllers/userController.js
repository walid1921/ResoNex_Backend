const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
// generate 32 random bytes and then converts them to a hexadecimal string.
const JWT_SECRET = process.env.JWT_SECRET;

//! user Register

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! user Login

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { registerUser, loginUser };
