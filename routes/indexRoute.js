const express = require("express");
const router = express.Router();
const controller = require("../controller/contactsController");

const messages = [
  {
    text: "Hi there!",
    user: "Lazar",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Marko",
    added: new Date(),
  },
];

router.get("/", controller.getAllContacts);

router.get("/new", controller.addNewContactGet);

router.post("/new", controller.addNewContactPost);

router.get("/:id", controller.getSingleContact);

module.exports = router;
