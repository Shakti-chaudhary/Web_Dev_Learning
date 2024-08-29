const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "views");

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index");
});
app.get("/profile", (req, res) => {
  const user = {
    name: "rahul kumar",
    email: "rahul420@gmail.com",
    city: "noida",
    skills: ["php", "js", "c++", "java", "node", "python"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.listen(4500);
