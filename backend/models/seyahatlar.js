import mongoose from "mongoose";

const { Schema } = mongoose;

const seyahatlar = new Schema({
    otobusFirmasi: { type : String  }, // String is shorthand for {type: String}
    kalkisSaati: { type : String  },
    fromTo:  { type : String },
    Ucret: { type : Number  },
});
export default seyahatlar;
