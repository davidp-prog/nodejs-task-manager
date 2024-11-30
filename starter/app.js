const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

// Middleware
app.use(express.static("./public"));
// app.use(notFound);

// Routes
// app.get("/hello", (req, res) => res.send("Task Manager App"));
app.use("/api/v1/tasks", tasks);
app.use();

// Start the App
const port = 3000;

const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI);
    // Spin the Server
    app.listen(port, console.log(`*** Server listening on port ${port}..`));
  } catch (error) {}
};

// Run Start
start();
