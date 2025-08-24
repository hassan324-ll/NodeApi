const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 4000;

// Load data from db.json
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));

app.get("/", (req, res) => {
  res.send("Welcome to Pakistan Stays API");
});

// Endpoints
app.get("/api/hotels", (req, res) => res.json(data.hotels));
app.get("/api/apartments", (req, res) => res.json(data.apartments));
app.get("/api/resorts", (req, res) => res.json(data.resorts));
app.get("/api/villas", (req, res) => res.json(data.villas));
app.get("/api/cabins", (req, res) => res.json(data.cabins));
app.get("/api/hostels", (req, res) => res.json(data.hostels));
app.get("/api/motels", (req, res) => res.json(data.motels));

// All data
app.get("/api/all", (req, res) => res.json(data));

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
module.exports = app;
