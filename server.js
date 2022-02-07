//Dependencies
const express = require("express");
const cors = require("cors");


const projects = require("./projects.json");
const about = require("./about.json");

//App obj
const app = express();

//Middleware
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/projects", (req, res) => {

  res.json(projects);
});


app.get("/about", (req, res) => {

  res.json(about);
});

//Port
const PORT = process.env.PORT || 4000;

//server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));