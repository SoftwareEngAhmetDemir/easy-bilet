const express = require("express");
const api = express.Router();
import mongoose from "mongoose";
import login from "../models/login";
import { msg } from "./responseMsgs";
const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const loginModel = mongoose.model("yenikayits", login);
const bcrypt = require("bcrypt");
const saltRounds = 10;

api.post("/", (req, res) => {
  
  loginModel.findOne({ email: req.body.email }, function (err, docs) {
    
    if (err) return res.json({ msg: msg.error });

    bcrypt.compare(req.body.parola, docs.parola, function (err, result) {
    if(err) return res.json({ msg: msg.error });
        result === true
        ? res.json({ msg: msg.ok })
        : res.json({ msg: msg.error });
    });
  })
});

export default api;
