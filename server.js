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

app.post("/tasks", async (req, res) => {
  const { title, description, priority, status } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description, priority, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, priority, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log(":::ERROR in the POST SERVER.JS", error);
    res.status(500).json({ message: "Could not post to the data base" });
  }
});

//Server init
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
