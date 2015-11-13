
angular.module('myApp.dataService', []).factory('dataService', ['$http', '$interpolate', function ($http, $interpolate) {
    var dataService = {};
    dataService.searchRepositories = function(newVal) {
      var url = $interpolate('https://api.github.com/search/repositories?q={{search}}+language:js+language:typescript&sort=stars&order=desc')({search: newVal});
      return $http.get(url);
    };

    dataService.getRepository = function (owner, name) {
      var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/contents')({owner: owner, name: name });
      return $http.get(url);
    };
    return dataService;

  }]);
