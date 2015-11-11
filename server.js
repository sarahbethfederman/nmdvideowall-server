// BASE SETUP
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// Load config variables
var config = require('./config.js');		

var port = config.http.port || 3000;        // set our port

// set the static files location for our Ember application
app.use(express.static(__dirname + '/public'));

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB SETUP
var mongoose = require('mongoose');
var dbURI = config.dburl;
mongoose.connect(dbURI);

// ROUTES
var router = express.Router();  
// all of our routes will be prefixed with /api/v1
//app.use('/api/v1/', router);
app.use('/', router);  
require('./app/router')(router); // configure our routes


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
 

// EXPOSE aap
exports = module.exports = app;