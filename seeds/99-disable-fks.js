exports.seed = async function(knex) {
  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');
};
