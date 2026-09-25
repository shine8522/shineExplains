const express = require("express");
const cors = require("cors");
const topicRoutes = require("./routes/topicRoutes");
const reelRoutes = require("./routes/reelRoutes");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/topics", topicRoutes);
app.use("/api/reels", reelRoutes);
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ShineExplains API is running",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();