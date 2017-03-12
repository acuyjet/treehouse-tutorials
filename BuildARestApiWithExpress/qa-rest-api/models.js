'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sortAnswers = function(a, b) {
    // Return negative if a should appear before b
    // Return 0 if order should be unchanged
    //Return positive if b should appear before a
    if(a.votes === b.votes) {
        return b.updatedAt - a.updatedAt
    }
    return b.votes - a.votes;
};

var AnswerSchema = new Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    votes: {type: Number, default: 0}
});

// Instance method
AnswerSchema.method('update', function(updates, callback) {
    Object.assign(this, updates, {updatedAt: new Date()});
    this.parent().save(callback);
});

// Another instance method
AnswerSchema.method('vote', function(vote, callback) {
   if(vote === 'up') {
       this.votes += 1;
   } else {
       this.votes -= 1;
   }
    this.parent().save(callback);
});

var QuestionSchema = new Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    answers: [AnswerSchema]
});

// Pre-save callback for QuestionSchema to sort the Answers array before calling next()
QuestionSchema.pre('save', function(next) {
    this.answers.sort(sortAnswers);
    next();
});

var Question = mongoose.model('Question', QuestionSchema);
module.exports.Question = Question;