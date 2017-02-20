'use strict';

var express = require('express'),
    posts = require('./mock/posts.json');

var app = express();

// use() method defines middleware; here it will serve static files
app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

// "__dirname" variable gives path to current file
app.set('views', __dirname + '/views');

// Create an index route
app.get('/', function(req, res){
    res.render('index');
});

// "?" indicates that the parameter is optional
app.get('/blog/:title?', function(req, res) {
    var title = req.params.title;
    if(title === undefined) {
        res.status(503);
        res.send('This page is under construction');
    } else {
        var post = posts[title] || {};
        res.render('post', {post: post});
    }
});

app.listen(3000, function(){
    console.log('The frontend server is running on port 3000!');
});