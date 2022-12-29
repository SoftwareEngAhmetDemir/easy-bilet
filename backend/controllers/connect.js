const mongoose = require('mongoose');
const { mongo_uri } = require('./security');
mongoose.connect(mongo_uri);
module.exports = mongoose;




