const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const myRoutes = require("./routes/route")

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('',myRoutes)

const port = 8800;

app.listen(port, () => console.log("Listening on port 8800"));




