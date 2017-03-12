'use strict';

var express = require('express');
var router = express.Router();

// GET /questions
// Route for questions collection
router.get('/', function(req, res) {
    res.json({
        response: 'You sent me a GET request!'
    });
});

// GET /questions/:id
// Route for specific questions
router.get('/:id', function(req, res) {
    res.json({
        response: 'You sent me a GET request for ID: ' + req.params.id
    });
});

// POST /questions
// Route for creating questions
router.post('/', function(req, res) {
    res.json({
        response: 'You sent me a POST request!',
        body: req.body
    });
});



module.exports = router;
