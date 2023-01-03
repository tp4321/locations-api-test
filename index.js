/* eslint-disable no-undef */
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.use(express.static("public"));
app.get("/api/locations", (req, res) => {
  res.send(JSON.stringify(database, null, database.length));
});
app.get("/randomize", (req, res) => {
  var number1 = Math.floor(Math.random() * 3);
  var number2 = Math.floor(Math.random() * 3);
  var number3 = Math.floor(Math.random() * 3);

  var text =
    "number1: " + number1 + "\nnumber2: " + number2 + "\nnumber3: " + number3;

  if (number1 == number2 && number1 == number3) {
    text = text + "\nSuccess!";
  }
  res.send(text);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
