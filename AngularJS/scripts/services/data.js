'use strict';

angular.module('todoListApp')
    .service('dataService', function($http) {
        this.helloConsole = function() {
            console.log('This is the helloConsole service!');
        };

        this.getTodos = function(callback) {
            $http.get('mock/todos.json')
                .then(callback);
        };

        this.deleteTodo = function(todo) {
            console.log('The "' + todo.name + '" task has been deleted!');
            // Other db logic would go here
        };

        this.saveTodos = function(todos) {
            console.log(todos.length + ' task(s) saved!');
            // Other db logic would go here
        };
    });