//Empty array as second arg creates app if it doesn't already exist
angular.module('todoListApp', [])
    .controller('mainCtrl', function($scope, dataService) {
        $scope.helloConsole = dataService.helloConsole;

        $scope.addTodo = function() {
            var todo = {name: "This is a new task!"};
            $scope.todos.push(todo);
        };

        dataService.getTodos(function(response) {
                // When a successful response is received, do something
                console.log(response.data);
                $scope.todos = response.data;
            });

        $scope.deleteTodo = function(todo, $index) {
            dataService.deleteTodo(todo);
            $scope.todos.splice($index, 1);
        };

        $scope.saveTodo = function(todo) {
            dataService.saveTodo(todo);
        }

})
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

        this.saveTodo = function(todo) {
            console.log('The "' + todo.name + '" task has been saved!');
            // Other db logic would go here
        };
    });