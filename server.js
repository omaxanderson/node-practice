const express = require('express');
const app = express();
const mongoose = require('mongoose');
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const Test = require("./models/User.js");

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", require("./routes/htmlroutes"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/testdb", { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "URL: Localhost:" + PORT);
  });