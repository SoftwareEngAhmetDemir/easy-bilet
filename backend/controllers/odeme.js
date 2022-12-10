import {Router} from 'express';

const api = Router();
import mongoose from "mongoose";
import odeme from "../models/odeme";
import { msg } from "./responseMsgs";
const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const odemeModel = mongoose.model("odeme", odeme);

api.post("/", (req, res) => {
    const Odemekayit = new odemeModel(req.body);
    Odemekayit.save(function (err, result) {
      if (err) {
        res.json({ msg: msg.error });
      } else {
        res.json({ msg: msg.createdSucess });
      }
    });
});

export default api;