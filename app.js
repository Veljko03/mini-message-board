const express = require("express");
const index = require("./routes/indexRoute");

const app = express();
//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(index);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening to port ", PORT);
});
