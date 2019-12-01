const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require("body-parser");

const app = express();
// const MongoStore = require('connect-mongo')(session);
// const mongoose = require('./db/mongoose');
// const db = mongoose.connection;


// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }));


// // router
// const storeRouter = require('./routers/store');;

// setup response parser 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('<h1>work</h1>');
});

module.exports = app;