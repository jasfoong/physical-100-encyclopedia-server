/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const challengesData = require("../seed-data/challenges-data")

exports.seed = async function(knex) {
  await knex('challenges').del()
  await knex('challenges').insert(challengesData);
};
