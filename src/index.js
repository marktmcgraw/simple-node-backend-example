require("dotenv").config();
const express = require("express");
const Quote = require("inspirational-quotes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static("public"));

// ALLOW CORS
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

// Routes
app.get("/", (req, res) => {
  res.json(Quote.getQuote());
});

app.get("/random", (req, res) => {
  res.json(Quote.getRandomQuote());
});

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
