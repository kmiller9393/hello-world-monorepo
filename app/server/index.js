const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World From Express!");
});

app.listen(5757, () => {
  console.log("Server is running on http://localhost:5757");
});
