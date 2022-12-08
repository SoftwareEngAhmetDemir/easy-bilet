import express from 'express';


const app = express()
const port = 8090;
var bodyParser  = require('body-parser');

var session = require('express-session')

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(
  session({
      resave: false,
      saveUninitialized: true,
      secret: "anyrandomstring",
    })
  );

const routing = require('./routes/index.js')

app.use('/', routing)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})