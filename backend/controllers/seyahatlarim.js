import {Router} from 'express';

const api = Router();
import mongoose from "mongoose";
import seyahatlarim from "../models/seyahatlarim";
import { msg } from "./responseMsgs";
const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const seyahatlarimModel = mongoose.models.odeme || mongoose.model("odeme", seyahatlarim) ;

api.post("/", (req, res) => {
  console.log(req.body.fromTo);
  seyahatlarimModel.find({ email: req.body.email }, function (err, docs) {
    if (err) return res.json({ msg: msg.error });
    console.log(docs)
    if(docs.length===0) return res.json({msg: msg.ThereIsNoRecords})
    res.json({ results: docs, msg: msg.ok });
  });
});

export default api;