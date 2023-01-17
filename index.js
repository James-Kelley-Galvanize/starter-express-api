const express = require("express");

const port = process.env.PORT || 3000;

const app = require("./app");

app.listen(port, () => {
  console.log(`Experimental server listening on ${port}`);
});
