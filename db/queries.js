const pool = require("./pool");

async function allContacts() {
  const { rows } = await pool.query("SELECT * FROM contacts");
  console.log(rows, "rowsss");

  return rows;
}

async function insertContact(username, message) {
  await pool.query("INSERT INTO contacts (name,message) VALUES ($1,$2)", [
    username,
    message,
  ]);
}

async function findOne(id) {
  console.log(typeof id);

  const a = await pool.query("SELECT name,message FROM contacts WHERE id=$1", [
    id,
  ]);
  console.log(a, "this is aa");

  if (a.rows[0] != null) {
    console.log(a.rows[0]);

    return a.rows[0];
  }
}

module.exports = { allContacts, insertContact, findOne };
