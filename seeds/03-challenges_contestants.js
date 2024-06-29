/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const challengesContestantsData = require("../seed-data/challenges-contestants-data")

exports.seed = async function(knex) {
    await knex('challenges_contestants').del();
    await knex('challenges_contestants').insert(challengesContestantsData);
};
