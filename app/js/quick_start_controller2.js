myApp.controller('QuickStartCtrl2',['$scope', '$http', function ($scope, $http) {

  // simple json call to itunes for data
  $scope.search = function () {
    $http.jsonp("http://itunes.apple.com/search", {
      params: {
        "callback": "JSON_CALLBACK",
        "term": $scope.searchTerm
      }
    }).success(function(data, status, headers, config) {
      $scope.itunesResults = data;
    }).error(function(data, status, headers, config) {
      console.log("error" + data);
    });
  };
}]);
