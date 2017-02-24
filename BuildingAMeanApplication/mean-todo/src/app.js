'use strict';

var express = require('express');

// Create Express instance
var app = express();


// Express middleware to serve static files -- serves the public directory when the root of the site is requested
app.use('/', express.static('public'));

app.listen(3000, function(){
    console.log('I am listening on port 3000!');
});