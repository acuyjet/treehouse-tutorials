'use strict';

var angular = require('angular');

angular.module('todoListApp').controller('mainCtrl', require('./main'));
angular.module('todoListApp').controller('todoCtrl', require('./todo'));