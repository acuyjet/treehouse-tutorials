angular.module('todoListApp')
    .directive('helloWorld', function() {
        return {
          template: "This is the Hello World directive!",
            restrict: 'E' // Restricts directive to be used as an element only, not as an attribute
        };
    });
