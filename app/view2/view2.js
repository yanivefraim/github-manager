'use strict';

angular.module('myApp.view2', ['ui.router', 'myApp.dataService'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
   .state('repository', {
       url:'/repository/:login/:fullName',
       templateUrl: 'view2/view2.html',
       controller: 'View2Ctrl',
       controllerAs: 'view2Ctrl'
   });
}])

.controller('View2Ctrl', [function() {

}]);
