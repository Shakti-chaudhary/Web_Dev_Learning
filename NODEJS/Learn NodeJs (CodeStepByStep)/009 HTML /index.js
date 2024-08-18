const express = require("express");
const path = require("path");

const app = express();
const dirPath = path.join(__dirname, "public");

app.use(express.static(dirPath));

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.listen(4500);
