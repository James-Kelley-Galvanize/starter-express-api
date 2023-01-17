const knex = require("knex");

const allKnexConfigs = require("../knexfile");

const knexConfig = allKnexConfigs[process.env.NODE_ENV || "development"];

console.log(`NODE ENV is:`, process.env.NODE_ENV);

const dbConnection = knex(knexConfig);

module.exports = dbConnection;
