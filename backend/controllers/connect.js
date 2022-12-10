
  import mongoose from "mongoose";
function mongoDb(){

const uri =
  "mongodb+srv://nour:nour@cluster0.bhwsyqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
}
module.exports = mongoDb;