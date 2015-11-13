'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.dataService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'view1Ctrl'
  });
}])

.controller('View1Ctrl', ['dataService', function(dataService) {
  var that = this;
  dataService.getItems().then(function (response) {
    that.items = response.data.slice(0,10);
  });
}]);
