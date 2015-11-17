'use strict';

// BASE SETUP
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// CONFIG
var config = require('./config.js');				// import config vars
var port = config.http.port || 3000;        // set our port

// set the static files location for our Ember application
app.use(express.static(__dirname + '/public'));

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));

// Add CORS headers
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Resource', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// DB SETUP
var mongoose = require('mongoose');
var dbURI = config.dburl;
mongoose.connect(dbURI);

// ROUTES
var router = express.Router();  

// all of our routes will be prefixed with /api/v1
app.use('/api/v1', router);
require('./app/router')(router); // configure our routes

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
 
// EXPOSE app
exports = module.exports = app;