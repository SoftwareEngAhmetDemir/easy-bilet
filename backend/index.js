import express from "express";
import { msg } from "./controllers/responseMsgs.js";

const app = express();
const port = 8090;
var bodyParser = require("body-parser");
import jwt from "jsonwebtoken";
import cors from "cors";
var tokenglobal = "";
var session = require("express-session");

app.use(bodyParser.urlencoded({ extended: true }));
const oneDay = 1000 * 60 * 60 * 24;
// parse application/json
app.use(bodyParser.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    secret: "anyrandomstring",
  })
);
const routing = require("./routes/index.js");
app.use(cors());
app.post("/*", (req, res, next) => {
  // res.append('namebackend', 'ahmed demir');
  res.set("Access-Control-Expose-Headers", "*");

  if (
    req.url === "/" ||
    req.url === "/login" ||
    req.url === "/yenikayit" ||
    req.url === "/logout" || req.url === "/decode"
  ){

    return next();
  }
    else {
    console.log("here");
    console.log(req.headers.token);
    console.log("finish");
    jwt.verify(req.headers.token, "my secret word", function (err, decoded) {
      // res.setHeader
      if (err) return res.json({ msg: msg.Unauthorized });
      else return next();
    });
  }
});

app.use("/", routing);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
