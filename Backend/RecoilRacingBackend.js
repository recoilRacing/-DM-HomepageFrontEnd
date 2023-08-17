// const {
//   getRedColor,
//   getGreenColor,
//   getBlueColor,
//   getCyanColor,
//   getYellowColor,
// } = require("./colors");

var fs = require("fs");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  next();
});

app.post("/signup", function (req, res) {
  console.log(req.body.mail);
});

app.listen(5010, console.log("RecoilRacing backend running on port 5100"));
