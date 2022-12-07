import mongoose from "mongoose";

const { Schema } = mongoose;

const yeniKayit = new Schema({
  ad: String, // String is shorthand for {type: String}
  soyad: String,
  email:  { type : String , unique : true, required : true, dropDups: true },
  parola: String,
});
export default yeniKayit;
