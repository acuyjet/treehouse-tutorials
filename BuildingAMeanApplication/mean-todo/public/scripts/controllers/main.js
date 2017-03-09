'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, $log, $interval,dataService){

    $scope.seconds = 0;

    $scope.counter = function() {
        $scope.seconds++;
        $log.log($scope.seconds + ' have passed!'); // Can also use $log.warn or $log.error
    }

    $interval($scope.counter, 1000, 10);

  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
    });
  
  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };
  
})