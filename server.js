const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const eventRoute = require("./routes/eventRoute");
const taskRoute = require("./routes/taskRoute");
const savedTaskRoute = require("./routes/savedTaskRoute");
const percentageRoute = require("./routes/percentageRoute");
const resourceRoute = require("./routes/resourceRoute");
const chartHistoryRoute = require("./routes/chartHistoryRoute");
const userRoute = require("./routes/userRoute");
// const storeAndDeleteRoute = require('./routes/storeAndDeleteRoute')
const errorMiddleware = require("./middleware/errorMiddleware");
const authMiddleware = require("./middleware/authMiddleware");

// for test

const posts = [
  {
    id: 1,
    username: "john",
    post: "john1n",
  },
  {
    id: 2,
    username: "jane",
    post: "jane123admin",
  },
];

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND_URL;
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [FRONTEND];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
};

//! middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use("/api/events", authMiddleware, eventRoute);
app.use("/api/tasks", authMiddleware, taskRoute);
app.use("/api/savedTasks", authMiddleware, savedTaskRoute);
app.use("/api/percentages", authMiddleware, percentageRoute);
app.use("/api/chartHistory", authMiddleware, chartHistoryRoute);
app.use("/api/resources", authMiddleware, resourceRoute);
app.use("/api", userRoute);
// app.use('/api/storeAndDelete', storeAndDeleteRoute);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

// app.get("/api/posts", authMiddleware, (req, res) => {
//   res.json(posts.filter(post => post.username === req.user.name));
// })

//! Connect to MongoDB Atlas
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected...");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
