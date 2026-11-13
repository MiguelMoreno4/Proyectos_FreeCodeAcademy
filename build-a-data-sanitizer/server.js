
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const { inputCleaner, inputValidator } = require("./middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Primero la redirección
app.get("/", (req, res) => {
  res.redirect(302, "/form");
});

// Después los archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
  res.json({
    username: req.body.username,
    comment: req.body.comment
  });
});

app.listen(port);

module.exports = app;

