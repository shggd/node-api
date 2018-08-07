const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const jade = require('jade');
const jwt = require('express-jwt');
const app = express();
require('dotenv').config();


//Connect to Database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`,{useMongoClient:true})
  .then(()=>{console.log("DB connected")},
err=>{console.log(err)});

// Cors
app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// Routes
const userroute = require('./routes/users');
const dogeroute = require('./routes/doges');
const commentroute = require('./routes/comments');
const productroute = require('./routes/products');
const cartroute = require('./routes/carts');
app.use('/user',userroute);
app.use('/doge',dogeroute);
app.use('/product',productroute);
app.use(commentroute);
app.use('/cart',cartroute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({error:'UnauthorizedError'});
  }
  if (err.name ==='CastError') {
    res.status(404).send({error:'ID not found'})
  }
});


app.listen(3000, function () {
  console.log('Server running');  
})