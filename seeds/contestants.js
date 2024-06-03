/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const contestantsData = require("../seed-data/contestants-data")

exports.seed = async function(knex) {
  await knex('contestants').del()
  await knex('contestants').insert(contestantsData);
};
