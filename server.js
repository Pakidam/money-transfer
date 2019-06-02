const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
