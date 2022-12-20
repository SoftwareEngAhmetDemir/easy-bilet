const express = require("express");
const api = express.Router();
import mongoose from "mongoose";
import { msg } from "./responseMsgs";
import jwt from "jsonwebtoken";

const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

api.post("/", (req, res) => {
    console.log(req.body.token)
  jwt.verify(req.body.token, "my secret word", function (err, decoded) {
    // res.setHeader
    if (err) return res.json({ msg: msg.NoToken });
    else return res.json({ msg: 200, decoded: decoded });
  });
});


export default api;
