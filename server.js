//Requires

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
require("dotenv").config();

//Middlewares

app.use(express.json());
app.use(cors());




//Server init
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
