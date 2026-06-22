const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const rockRoutes = require("./routes/rockRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors("*"));
app.use(express.json());

// Health-check route
app.get("/", (req, res) => {
  res.send("Rockstagram API is running 🪨");
});

app.use("/api/rocks", rockRoutes); // <- all rock routes live under /api/rocks

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
