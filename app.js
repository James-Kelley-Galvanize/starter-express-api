const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { getCats } = require("./db/dbControllers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan(`tiny`));

app.get(`/`, (req, res) => {
  res.send(500, JSON.stringify({ message: `SERVER ONLINE` }));
});
app.get(`/cats`, (req, res) => {
  getCats()
    .then((data) => {
      res.send(500, JSON.stringify(data));
    })
    .catch((error) => {
      res.send(401, JSON.stringify({ error, message: `Error Encountered` }));
    });
});

module.exports = app;
