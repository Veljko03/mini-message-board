const pool = require("./pool");

async function allContacts() {
  const { rows } = await pool.query("SELECT * FROM contacts");
  return rows;
}

async function insertContact(username, message) {
  await pool.query("INSERT INTO contacts (name) VALUES ($1,$2)", [
    username,
    message,
  ]);
}

module.exports = { allContacts, insertContact };
