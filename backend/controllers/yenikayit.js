const express = require("express");


const api = express.Router();
import mongoose from "mongoose";
import yeniKayit from "../models/yeniKayit";
import { msg } from "./responseMsgs";
const uri =
"mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const kayitModel = mongoose.model("yeniKayit", yeniKayit);
const bcrypt = require("bcrypt");
const saltRounds = 10;


api.post("/", (req, res) => {

  const myPlaintextPassword = req.body.parola || "root";
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    req.body.parola = hash;
    req.session.hash = hash;
    const kayit = new kayitModel(req.body);
    kayit.save(function (err, result) {
    
      if (err) {
        res.json({ msg: msg.error });
      } else {
        res.json({ msg: msg.createdSucess });
      }
    });
  });
});

export default api;

// data example
// {
//     "ad": "ahmed",
//     "soyad":"demir",
//     "email":"3457",
//     "parola":"parola"
// }
