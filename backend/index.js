import express from 'express';


const app = express()
const port = 8090;
var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const routing = require('./routes/index.js')

app.use('/', routing)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})