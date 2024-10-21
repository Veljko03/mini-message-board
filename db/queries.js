const pool = require("./pool");

async function allContacts() {
  const { rows } = await pool.query("SELECT * FROM contacts");
  return rows;
}

async function insertContact(username, message) {
  await pool.query("INSERT INTO contacts (name,message) VALUES ($1,$2)", [
    username,
    message,
  ]);
}

async function findOne(name) {
  await pool.query("SELECT name,message FROM contacts WHERE name LIKE '%$1%'", [
    name,
  ]);
}

module.exports = { allContacts, insertContact, findOne };
