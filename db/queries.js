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

async function findOne(id) {
  const a = await pool.query("SELECT name,message FROM contacts WHERE id=$1", [
    id,
  ]);
  if (a.rows[0] != null) {
    return a.rows[0];
  }
}

module.exports = { allContacts, insertContact, findOne };
