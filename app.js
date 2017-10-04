const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const jade = require('jade');
const jwt = require('express-jwt');

const app = express();

//Connect to Database
mongoose.connect('mongodb://localhost/myapp');


// Cors
app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Routes
const userroute = require('./routes/users');
const dogeroute = require('./routes/doges');
const commentroute = require('./routes/comments');
app.use('/user',userroute);
app.use('/doge',dogeroute);
app.use(commentroute);



app.get('/',function(req,res){
   const str = "THIS IS COMING FROM START PAGE"
   res.render('startpage',str);
});




app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send(err);
  }
});

app.listen(3000, function () {
  console.log('http://localhost:3000/')
})