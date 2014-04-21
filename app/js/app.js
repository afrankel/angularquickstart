'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/quickstartview1', {templateUrl: 'partials/quick_start_partial1.html', controller: 'QuickStartCtrl1'});
  $routeProvider.when('/quickstartview2', {templateUrl: 'partials/quick_start_partial2.html', controller: 'QuickStartCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
