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
  res.status(200).send(JSON.stringify({ message: `SERVER ONLINE` }));
});
app.get(`/cats`, (req, res) => {
  getCats()
    .then((data) => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch((error) => {
      res
        .status(401)
        .send(JSON.stringify({ error, message: `Error Encountered` }));
    });
});

module.exports = app;
