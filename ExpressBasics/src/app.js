'use strict';

var express = require('express');

var app = express();

// Create a route
app.get('/', function(req, res){
    res.send('<h1>Hello, world!</h1>');
});

app.listen(3000, function(){
    console.log('The frontend server is running on port 3000!');
});