const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
// get json data from array
const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News API running");
});

app.get("/news-category", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
