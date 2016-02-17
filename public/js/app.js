'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'services',
  'md.data.table',
  'angular-loading-bar',
  'ui.router',
  'satellizer'
]);

myApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}])


myApp.config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide) {

  function redirectWhenLoggedOut($q, $injector) {
    return {
      responseError: function(rejection) {
        var $state = $injector.get('$state');

        var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid' ];

        angular.forEach(rejectionReasons, function(value, key) {
          if(rejection.data.error === value) {
            localStorage.removeItem('user');
            $state.go('auth');
          }
        });
        return $q.reject(rejection);
      }
    }
  }

  $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);
  $httpProvider.interceptors.push('redirectWhenLoggedOut');

  $authProvider.loginUrl = 'api/authenticate';
  $urlRouterProvider.otherwise('/auth')

  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: 'partials/auth.html',
      controller: 'authController',
      controllerAs: 'vm'
     })
    .state('home', {
      url: '/home',
      templateUrl: 'partials/index.html'
    })
    .state('students', {
      url: '/student',
      templateUrl: 'partials/studentList.html',
      controller: 'studentsController',
      controllerAs: 'vm'
    })
    .state('student', {
      url: '/student/:id',
      templateUrl: 'partials/studentDetails.html',
      controller: 'studentController',
      controllerAs: 'vm'
    })
    .state('guardian', {
      url: '/guardian',
      templateUrl: 'partials/guardianList.html',
      controller: 'guardiansController',
      controllerAs: 'vm'
    })
    .state('staffs', {
      url: '/staff',
      templateUrl: 'partials/staffList.html',
      controller: 'staffsController',
      controllerAs: 'vm'
    })
    .state('staff', {
      url: '/staffs/:id',
      templateUrl: 'partials/staffDetails.html',
      controller: 'staffController',
      controllerAs: 'vm'
    })
    .state('Fees', {
      url: '/fees',
      templateUrl: 'partials/feesList.html',
      controller: 'feesController',
      controllerAs: 'vm'
    })
    .state('studentFees', {
      url: '/student/:student_id/fees',
      templateUrl: 'partials/studentFees.html',
      controller: 'studentFeesController',
      controllerAs: 'vm'
    })
    .state('mark', {
      url: '/mark',
      templateUrl: 'partials/studentMarkList.html',
      controller: 'markController',
      controllerAs: 'vm'
    })
    .state('attendance', {
      url: '/attendance',
      templateUrl: 'partials/attendance.html',
      controller: 'attendanceController',
      controllerAs: 'vm'
    })
    .state('other', {
      url: '/other',
      templateUrl: 'partials/other.html',
      controller: 'otherController',
      controllerAs: 'vm'
    })

})

myApp.config(['$mdThemingProvider', function($mdThemingProvider) {
  'use strict';

  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
}])
