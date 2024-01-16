const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const eventRoute = require("./routes/eventRoute");
const taskRoute = require("./routes/taskRoute");
const savedTaskRoute = require("./routes/savedTaskRoute");
const percentageRoute = require("./routes/percentageRoute")
const resourceRoute = require("./routes/resourceRoute")
const chartHistoryRoute = require("./routes/chartHistoryRoute")
// const storeAndDeleteRoute = require('./routes/storeAndDeleteRoute')
const errorMiddleware = require("./middleware/errorMiddleware");

// for test

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
};

//! middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use("/api/events", eventRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/savedTasks", savedTaskRoute);
app.use("/api/percentages", percentageRoute)
app.use("/api/chartHistory", chartHistoryRoute)
app.use("/api/resources", resourceRoute)
// app.use('/api/storeAndDelete', storeAndDeleteRoute);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

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
