/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const challengesContestantsData = require("../seed-data/challenges-contestants-data")

exports.seed = async function(knex) {
  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');
  await knex('challenges_contestants').truncate();
  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');

  await knex('challenges_contestants').insert(challengesContestantsData);
};

