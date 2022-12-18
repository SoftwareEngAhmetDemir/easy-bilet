const express = require("express");
const api = express.Router();
import mongoose from "mongoose";
import login from "../models/login";
import { msg } from "./responseMsgs";
import jwt from "jsonwebtoken";

const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const loginModel = mongoose.model("yenikayits", login);
const bcrypt = require("bcrypt");
// const saltRounds = 10;

api.post("/",  async(req, res) => {

 const user = await   loginModel.findOne({ email: req.body.email })
 if(user){
   bcrypt.compare(req.body.parola, user.parola, async function (err, result) {
     if (err) return res.json({ msg: msg.error });
     if (result === true) {
       let token = await  jwt.sign(
         {
           ...req.body
          },
          "my secret word",
          { expiresIn: 60 * 60 }
          );
          req.session.token = token;
          res.append("token",token);
       
       return  res.json({ msg: msg.ok });
      } else return  res.json({ msg: msg.error });
    })
  }
})


export default api;
