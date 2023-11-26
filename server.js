//Requires

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
require("dotenv").config();
const pool = require("./Database/db");

//Middlewares

app.use(express.json());
app.use(cors());

//The http requests

app.get("/tasks", (req, res) => {
  pool
    .query("SELECT * from tasks")
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ message: `Error from the Backend : ${err}` })
    );
});

//Server init
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
