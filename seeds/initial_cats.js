/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cats")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cats").insert([
        {
          id: 1,
          name: "Hanzo",
          breed: "American shorthair",
          coat_color: "black",
          favorite_treat: "buffalo wings",
        },
        {
          id: 2,
          name: "Midori",
          breed: "American shorthair",
          coat_color: "tabby",
          favorite_treat: "squid jerky",
        },
        {
          id: 3,
          name: "Jesse",
          breed: "Hemingway",
          coat_color: "black/white",
          favorite_treat: "salmon",
        },
      ]);
    });
};
