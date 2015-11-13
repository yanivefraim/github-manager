'use strict';

angular.module('myApp.view1', ['ui.router', 'myApp.dataService'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
   .state('repositories', {
       url:'/repositories',
       templateUrl: 'view1/view1.html',
       controller: 'View1Ctrl',
       controllerAs: 'view1Ctrl'
   });
}])

.controller('View1Ctrl', ['dataService', '$scope', function(dataService, $scope) {
  var that = this;
  $scope.$watch('view1Ctrl.search', function(newVal, oldVal) {
    if (angular.isDefined(newVal) && newVal !== oldVal) {

      dataService.searchRepositories(newVal).then(function (response) {
        that.items = response.data.items.slice(0,10);
        console.log(that.items);
      });
    }
  });
}]);
