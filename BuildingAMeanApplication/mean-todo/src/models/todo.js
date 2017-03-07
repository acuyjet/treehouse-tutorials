'use strict';

var mongoose = require('mongoose');

// Model needs to take into account todo.name and todo.completed
var todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;