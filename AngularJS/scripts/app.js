//Empty array as second arg creates app if it doesn't already exist
angular.module('todoListApp', [])
    .controller('mainCtrl', function($scope) {
        $scope.helloWorld = function() {
            console.log('Hello there! This is the helloWorld controller function in the mainCtrl!');
        };
})
    .controller('coolCtrl', function($scope) {
        $scope.whoAmI = function() {
            console.log('Hello there! This is the coolCtrl function!');
        };

        // Overwrites helloWorld() from parent scope because prototypical inheritance only goes in one direction
        $scope.helloWorld = function() {
            console.log('This is not the mainCtrl!');
        }
})
    .controller('iAmASibling', function ($scope) {
        // Do stuff
        $scope.foobar = 1234;
    })
