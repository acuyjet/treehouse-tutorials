'use strict';

angular.module('todoListApp')
    .directive('todos', function() {
        return {
            templateUrl: 'templates/todos.html',
            controller: 'mainCtrl',
            replace: true // Replaces <todo> tags in todos.html
        }
    });