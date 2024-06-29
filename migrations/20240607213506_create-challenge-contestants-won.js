/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('challenges_contestants', function(table) {
        table.integer('challenge_id').unsigned().notNullable();
        table.integer('contestant_id').unsigned().notNullable();
        table.boolean('won').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        table.primary(['challenge_id', 'contestant_id']);

        table.foreign('challenge_id').references('id').inTable("challenges").onDelete('CASCADE');
        table.foreign('contestant_id').references('id').inTable("contestants").onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('challenges_contestants')
};
