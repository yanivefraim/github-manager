
angular.module('myApp.dataService', []).factory('dataService', ['$http', '$interpolate', function ($http, $interpolate) {
    var dataService = {};
    dataService.getItems = function(newVal) {
      var url = $interpolate('https://api.github.com/search/repositories?q={{search}}+language:js+language:typescript&sort=stars&order=desc')({search: newVal});
      return $http.get(url);
    };

    return dataService;

  }]);
