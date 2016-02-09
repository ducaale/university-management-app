'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'services',
  'md.data.table',
  'angular-loading-bar'
]);

myApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])

myApp.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/index.html' ,

  }).
  when('/student', {
    templateUrl: 'partials/studentList.html' ,
    controller: 'studentsController',
    controllerAs: 'vm'
  }).
  when('/student/:id', {
    templateUrl:'partials/studentDetails.html',
    controller: 'studentController'
  }).
  when('/guardian', {
    templateUrl:'partials/guardianList.html',
    controller: 'guardiansController',
    controllerAs: 'vm'
  }).
  when('/fees', {
    templateUrl:'partials/feesList.html',
    controller: 'feesController'
  }).
  when('/student/:student_id/fees', {
    templateUrl: 'partials/studentFees.html',
    controller: 'studentFeesController',
    controllerAs: 'vm'
  }).
  when('/staff', {
    templateUrl: 'partials/staffList.html',
    controller: 'staffsController'
  }).
  when('/staff/:id', {
    templateUrl: 'partials/staffDetails.html',
    controller: 'staffController'
  }).
  when('/mark', {
    templateUrl: 'partials/studentMarkList.html',
    controller: 'markController',
    controllerAs: 'vm'
  }).
  when('/other', {
    templateUrl: 'partials/other.html',
    controller: 'otherController',
    controllerAs: 'vm'
  }).
  otherwise({
    redirectTo: '/'
  });
});

myApp.config(['$mdThemingProvider', function ($mdThemingProvider) {
    'use strict';

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
}])
