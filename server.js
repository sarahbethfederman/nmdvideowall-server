// BASE SETUP
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || process.env.NODE_PORT || 3000;        // set our port

// DB SETUP
var mongoose = require('mongoose');
// TODO: connect to db here

// ROUTES
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(request, response) {
    response.json({ message: 'hooray! welcome to our api!' });
});

// all of our routes will be prefixed with /api/v1
app.use('/api/v1/', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
