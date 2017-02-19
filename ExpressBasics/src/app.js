'use strict';

var express = require('express'),
    posts = require('./mock/posts.json');

var app = express();

debugger;

// Create a route
app.get('/', function(req, res){
    res.send('<h1>Hello, world!</h1>');
});

app.get('/blog', function(req, res) {
    res.send(posts);
});

app.listen(3000, function(){
    console.log('The frontend server is running on port 3000!');
});