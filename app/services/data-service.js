
angular.module('myApp.dataService', []).factory('dataService', ['$http', function ($http) {
  var dataService = {};
  dataService.getItems = function() {
      return $http.get('https://api.github.com/repos/angular/angular/contributors');
    }

    return dataService;

  }]);
