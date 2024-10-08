require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql2",
  connection: process.env.JAWSDB_URL || {
    host: process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8"
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  }
};
