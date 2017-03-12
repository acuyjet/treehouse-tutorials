'use strict';

var express = require('express');
var app = express();
var jsonParser = require('body-parser').json;
var logger = require('morgan');
var mongoose = require('mongoose');
var routes = require('./routes');

app.use(logger('dev'));
app.use(jsonParser());

mongoose.connect('mongodb://localhost:27017/q-and-a');
var db = mongoose.connection;
db.on('error', function(err) {
    console.error('Connection error:', err);
});
db.once('open', function() {
    console.log("DB connection successful!");
});

// Allow for cross-origin resource sharing
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if(req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE,');
        return res.status(200).json({});
    }
    next();
});

app.use('/questions', routes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not found!');
    err.status = 404;
    next(err);
});

// Error handler -- extra parameter is how Express knows it's an error handler & not middleware
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Express server is listening on port', port);
});