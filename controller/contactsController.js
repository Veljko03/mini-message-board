const db = require("../db/queries");

async function getAllContacts(req, res) {
  const allContacts = await db.allContacts();
  res.render("index", { contacts: allContacts });
}

module.exports = {
  getAllContacts,
};
