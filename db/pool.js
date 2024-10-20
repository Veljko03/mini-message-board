const { Pool } = require("pg");
const dotenv = require("dotenv");

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
});
