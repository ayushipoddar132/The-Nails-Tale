const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDatabase = require("./config/db");
const customRequestRoutes = require("./routes/customRequestRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "The Nails Tale backend is running ♡",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
  });
});

app.use("/api/custom-requests", customRequestRoutes);

const PORT = process.env.PORT || 5000;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(
      `The Nails Tale server is running on http://localhost:${PORT}`
    );
  });
});