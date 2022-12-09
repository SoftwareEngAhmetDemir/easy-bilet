import mongoose from "mongoose";
const arrayUniquePlugin = require('mongoose-unique-array');
const { Schema } = mongoose;

const seyahatlar = new Schema({
    // _id: {type: String},
    otobusFirmasi: { type : String  }, // String is shorthand for {type: String}
    kalkisSaati: { type : String  },
    fromTo:  { type : String },
    Ucret: { type : Number  },
    filled:[String],
    maxfilled: {type:Number}
});
seyahatlar.plugin(arrayUniquePlugin);
export default seyahatlar;
