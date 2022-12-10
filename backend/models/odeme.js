import mongoose from "mongoose";
const { Schema } = mongoose;

const odeme = new Schema({
   
    otobusFirmasi: { type : String  }, // String is shorthand for {type: String}
    kalkisSaati: { type : String  },
    varisSaati: {type: String},
    fromTo:  { type : String },
    Ucret: { type : Number },
    email: {type: String}, // if current user's mail is same logged mail lists all toursts
    cepTel: {type : Number},
    ad: {type: String},
    soyad: {type: String},
    tc: {type: String},
    tarih : {type : Date , default : new Date()}
});

export default odeme;
