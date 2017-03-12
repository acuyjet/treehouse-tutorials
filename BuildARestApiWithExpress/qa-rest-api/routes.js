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

// GET /questions/:qID
// Route for specific questions
router.get('/:qID', function(req, res) {
    res.json({
        response: 'You sent me a GET request for question ID: ' + req.params.qID
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

// POST /questions/:qID/answers
// Route for creating an answer
router.post('/:qID/answers', function(req, res) {
    res.json({
        response: 'You sent a POST request to /answers!',
        questionId: req.params.qID,
        body: req.body
    });
});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:qID/answers/:aID', function(req, res) {
    res.json({
        response: 'You sent a PUT request to /answers!',
        questionId: req.params.qID,
        answerID: req.params.aID,
        body: req.body
    });
});

// DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete('/:qID/answers/:aID', function(req, res) {
    res.json({
        response: 'You sent a DELETE request to /answers!',
        questionId: req.params.qID,
        answerID: req.params.aID
    });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Upvote or downvote a specific answer
router.post('/:qID/answers/:aID/vote-:direction', function(req, res, next){
    if(req.params.direction.search(/^(up|down)$/) === -1) {
        var err = new Error('Not found!');
        err.status = 404;
        next(err);
    } else {
        next();
    };
}, function(req, res) {
    res.json({
        response: 'You sent a POST request to /vote-' + req.params.direction,
        questionId: req.params.qID,
        answerID: req.params.aID,
        vote: req.params.direction
    });
});

module.exports = router;
