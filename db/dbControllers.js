const knex = require("./dbConnection");

function getCats() {
  return knex("cats").then((data) => data);
}

module.exports = { getCats };
