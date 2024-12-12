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
  let { id } = req.params;
  id = parseInt(id);
  id += 1;
  if (isNaN(id) || id <= 0) {
    return res.status(400).send("Invalid ID provided.");
  }

  console.log(typeof id, " idtype");

  const single = await db.findOne(id);
  console.log(single, " singleeee");

  res.render("single", { contact: single });
}

module.exports = {
  getAllContacts,
  addNewContactGet,
  addNewContactPost,
  getSingleContact,
};
