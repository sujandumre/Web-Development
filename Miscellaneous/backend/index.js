const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));  // for form data
app.use(express.json());                          // for JSON

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`standard GET response ${username}`);
});

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  console.log("Username:", username);
  console.log("Password:", password);
  res.send(`Standard POST Response ${username}`);
});

app.listen(port, () => {
  console.log(`it is listening on ${port}`);
});
