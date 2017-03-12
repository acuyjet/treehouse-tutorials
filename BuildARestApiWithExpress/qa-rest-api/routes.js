'use strict';

var express = require('express');
var router = express.Router();
var Question = require('./models').Question;

router.param('qID', function(req, res, next, id, err) {
    Question.findById(id, function(err, doc){
        if(err) return next(err);
        if(!doc) {
            err = new Error('Not found!');
            err.status = 404;
            return next(err);
        }
        req.question = doc;
        return next();
    });
});

router.param('aID', function(req, res, next, id, err) {
    req.answer = req.question.answers.id(id);
    if(!req.answer) {
        err = new Error('Not found!');
        err.status = 404;
        return next(err);
    }
    next();
});


// GET /questions
// Route for questions collection
router.get('/', function(req, res, next) {
    Question.find({})
        .sort({createdAt: -1})
        .exec(function(err, questions) {
            if(err) return next(err);
            res.json(questions);
    });
});

// GET /questions/:qID
// Route for specific questions
router.get('/:qID', function(req, res, next) {
    res.json(req.question);
});

// POST /questions
// Route for creating questions
router.post('/', function(req, res, next) {
    var question = new Question(req.body);
    question.save(function(err, question) {
        if(err) return next(err);
        res.status(201);
        res.json(question);
    });
});

// POST /questions/:qID/answers
// Route for creating an answer
router.post('/:qID/answers', function(req, res, next) {
    req.question.answers.push(req.body);
    req.question.save(function(err, question) {
        if(err) return next(err);
        res.status(201);
        res.json(question);
    });
});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:qID/answers/:aID', function(req, res, next) {
    req.answer.update(req.body, function(err, result) {
        if(err) return next(err);
        res.json(result);
    });
});

// DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete('/:qID/answers/:aID', function(req, res, next) {
    req.answer.remove(function(err){
        req.question.save(function(err, question){
            if(err) return next(err);
            res.json(question);
        });
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
        req.votes = req.params.direction;
        next();
    };
}, function(req, res, next) {
        req.answer.vote(req.vote, function(err, question){
            if(err) return next(err);
            res.json(question);
        });
});

module.exports = router;
