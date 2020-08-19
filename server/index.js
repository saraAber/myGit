const path = require("path");
var http=require('http')
const express = require("express");
var toobusy = require('toobusy-js');
const app = express(); // create express app
var mysql = require('mysql');
var {token}=require('./routes/Token')
var {comaxReturn} =require('./routes/ComaxToken');
var {reportes}=require('./routes/Reprtes');
var superRoute = require('./routes/super/indexSuper');


const db = mysql.createConnection ({
  host: "52.59.235.210",
  port:33061,
  user: "app",
  password: "1qaz@WSX",
  database: 'hamazon'
});
// connect to database
db.connect((err) => {
  if (err) {
      console.log(err);
  }
  console.log('Connected to database');
});
db.on('error', function(err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR'
});
global.db = db;
// app.use(helmet.xframe()); // default behavior (DENY)
// helmet.xframe('sameorigin'); // SAMEORIGIN
// helmet.xframe('allow-from', 'http://alloweduri.com'); //ALLOW-FROM uri

app.use(function(req, res, next) {
  console.log(req.url,req.method)
  if (toobusy()) {
     console.log("to bezy")
      res.send(503, "Server Too Busy");
  } else {
  next();
  }
});
app.use(express.static(path.join(__dirname, "..", "build")));
app.use('/super',superRoute)

app.get('/statusPay',comaxReturn)
app.get('/reptsUser',reportes)
app.post('/CreditPaymentComax',token); //שליפת טוקן מקומקס והצגה ללקוח על המסף
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../../build/index.html'));
});



// add middlewares
app.use(express.static("public"));
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
