/* eslint-disable no-undef */
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.use(express.static("public"));
app.use(express.json());

app.get("/api/locations/", (req, res) => {
  res.send(JSON.stringify(database, null, database.length));
});

app.get("/api/locations/:urlId([0-9]+)", (req, res) => {
  const urlId = Number(req.params.urlId);
  var location = null;
  for (let i = 0; i < database.length; i++) {
    if (database[i].id == urlId) {
      location = database[i];
      break;
    }
  }
  res.send(location);
});

app.post("/api/locations", (req, res) => {
  let longitude = req.body.longitude;
  let latitude = req.body.latitude;
  let id = database[database.length - 1].id + 1;
  let newlocation = { latitude: latitude, longitude: longitude, id: id };
  database.push(newlocation);
  res.status(204).send(JSON.stringify(newlocation, null, 1));
});

app.delete("/api/locations/:urId([0-9]+)", (req, res) => {
  const urId = Number(req.params.urId);
  for (let i = 0; i < database.length; i++) {
    if (database[i].id == urId) {
      database = database.splice(i, 1);
      break;
    }
  }
  res.status(204).send();
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
