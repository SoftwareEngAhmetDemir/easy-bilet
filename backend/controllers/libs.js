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
