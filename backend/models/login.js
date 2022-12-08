import mongoose from "mongoose";

const { Schema } = mongoose;

const login = new Schema({
  email:  String,
  parola: String,
});
export default login;
