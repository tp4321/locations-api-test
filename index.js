/* eslint-disable no-undef */
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("/randomize", (req, res) => {
  var number1 = Math.random() * 3;
  var number2 = Math.random() * 3;
  var number3 = Math.random() * 3;

  var text =
    "number1: " +
    number1 +
    "/n" +
    "number2: " +
    number2 +
    "/n" +
    "number3: " +
    number3;

  if (number1 == number2 && number1 == number3) {
    text = text + "/n" + "Success!";
  }
  res.send(text);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
