const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Welcome, This is a Home Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome, This is a About Page");
});

app.listen(4500);
