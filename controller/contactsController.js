const db = require("../db/queries");

async function getAllContacts(req, res) {
  const allContacts = await db.allContacts();
  res.render("index", { contacts: allContacts });
}

async function addNewContactGet(req, res) {
  res.render("form");
}

async function addNewContactPost(req, res) {
  const { author, message } = req.body;
  await db.insertContact(author, message);
  res.redirect("/");
}

async function getSingleContact(req, res) {
  console.log(req.body);
}

module.exports = {
  getAllContacts,
  addNewContactGet,
  addNewContactPost,
  getSingleContact,
};
