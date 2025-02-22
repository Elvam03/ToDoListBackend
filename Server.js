const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./Routes/taskRoutes"); // Import routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.send("MERN To-Do List API is running...");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
