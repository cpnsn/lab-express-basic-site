const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/home", (req, res) => {
  res.render("home", {
    title: "Welcome",
    style: ["home.css", "about.css"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Miguel",
    style: ["about.css"],
  });
});

app.get("/works", (req, res) => {
  res.render("works", {
    title: "His works",
    style: ["works.css"],
  });
});

app.listen(3000);
