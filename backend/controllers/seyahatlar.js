import {Router} from 'express';

const api = Router();
import mongoose from "mongoose";
import seyahatlar from "../models/seyahatlar";
import { msg } from "./responseMsgs";
const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const seyahatlarModel = mongoose.model("seyahatlar", seyahatlar);

api.post("/", (req, res) => {
  console.log(req.body.fromTo);
  seyahatlarModel.find({ fromTo: req.body.fromTo,Tarih:{$eq: req.body.tarih} }, function (err, docs) {
    if (err) return res.json({ msg: msg.error });
    console.log(docs)
    if(docs.length===0) return res.json({msg: msg.ThereIsNoRecords})
    res.json({ results: docs, msg: msg.ok });
  });
});

export default api;