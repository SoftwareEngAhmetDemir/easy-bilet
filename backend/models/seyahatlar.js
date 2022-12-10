import mongoose from "mongoose";
const { Schema } = mongoose;

const seyahatlar = new Schema({
    // _id: {type: String},
    otobusFirmasi: { type : String  }, // String is shorthand for {type: String}
    kalkisSaati: { type : String  },
    varisSaati: {type: String},
    fromTo:  { type : String },
    Ucret: { type : Number  },
    filled:[String],
    maxfilled: {type:Number}
});
export default seyahatlar;
