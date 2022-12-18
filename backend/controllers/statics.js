const dotenv = require('dotenv')
dotenv.config()  

const uri = process.env.mongo_uri;


module.exports = {uri}