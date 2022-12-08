const express = require("express");
const api = express.Router();
import mongoose from "mongoose";
import login from "../models/login";
import { msg } from "./responseMsgs";
const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

module.exports = libs;