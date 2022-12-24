import { Router } from "express";

const api = Router();
import mongoose from "mongoose";
import seyahatlarim from "../models/seyahatlarim";
import { msg } from "./responseMsgs";
const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const seyahatlarimModel =
  mongoose.models.odeme || mongoose.model("odeme", seyahatlarim);

api.post("/", (req, res) => {
  let start = req.body.start ; // number of page we are in
  let end = req.body.end ; // last page

  Promise.all([
    seyahatlarimModel
      .find({ email: req.body.email })
      .limit(end)
      .skip(start*(end-1)),
    seyahatlarimModel.find({ email: req.body.email }).count(),
  ])
    .then(([records, recordNumbers]) => {
  
      res.json({msg: msg.ok, records, maxRecordNumbers: recordNumbers });
    })
    .catch((err) => res.json({ msg: msg.error }));
});

export default api;
