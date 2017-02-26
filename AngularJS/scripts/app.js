//Empty array as second arg creates app if it doesn't already exist
angular.module('todoListApp', [])
    .controller('mainCtrl', function($scope) {
        $scope.learningNgChange = function() {
            console.log('An input changed!');
        };

    $scope.todos = [
        {"name" : "Clean the house"},
        {"name" : "Water the dog"},
        {"name" : "Feed the lawn"},
        {"name" : "Pay dem bills"},
        {"name" : "Run"},
        {"name" : "Stretch"}
    ]
});