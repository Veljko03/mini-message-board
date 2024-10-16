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

router.get("/new", (req, res) => {
  res.render("form");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.render("single", { message: messages[id] });
});

router.post("/new", (req, res) => {
  const author = req.body.author;
  const message = req.body.message;
  messages.push({ text: message, user: author, added: new Date() });

  res.redirect("/");
});
console.log(messages);

module.exports = router;
