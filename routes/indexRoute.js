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

router.post("/new", (req, res) => {
  console.log(req.body);
  const authot = req.body.author;
  const message = req.body.message;
});

module.exports = router;
