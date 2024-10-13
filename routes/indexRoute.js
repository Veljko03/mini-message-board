const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = router;
