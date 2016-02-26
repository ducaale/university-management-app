'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'admission',
  'academic',
  'attendance',
  'auth',
  'fees',
  'ngRoute',
  'ngResource',
  'ngMaterial',
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

        var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];

        angular.forEach(rejectionReasons, function(value, key) {
          if (rejection.data.error === value) {
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
      templateUrl: 'auth/partials/auth.html',
      controller: 'authController',
      controllerAs: 'vm'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'index.html'
    })
    .state('home.students', {
      url: '/student',
      templateUrl: 'admission/partials/studentList.html',
      controller: 'studentsController',
      controllerAs: 'vm'
    })
    .state('home.student', {
      url: '/student/:id',
      templateUrl: 'admission/partials/studentDetails.html',
      controller: 'studentController',
      controllerAs: 'vm'
    })
    .state('home.guardians', {
      url: '/guardian',
      templateUrl: 'admission/partials/guardianList.html',
      controller: 'guardiansController',
      controllerAs: 'vm'
    })
    .state('home.staffs', {
      url: '/staff',
      templateUrl: 'admission/partials/staffList.html',
      controller: 'staffsController',
      controllerAs: 'vm'
    })
    .state('home.staff', {
      url: '/staffs/:id',
      templateUrl: 'admission/partials/staffDetails.html',
      controller: 'staffController',
      controllerAs: 'vm'
    })
    .state('home.fees', {
      url: '/fees',
      templateUrl: 'fees/partials/feesList.html',
      controller: 'feesController',
      controllerAs: 'vm'
    })
    .state('home.scores', {
      url: '/scores',
      templateUrl: 'academic/partials/examScores.html',
      controller: 'scoresController',
      controllerAs: 'vm'
    })
    .state('home.attendance', {
      url: '/attendance',
      templateUrl: 'attendance/partials/attendance.html',
      controller: 'attendanceController',
      controllerAs: 'vm'
    })
    .state('home.other', {
      url: '/other',
      templateUrl: 'academic/partials/other.html',
      controller: 'otherController',
      controllerAs: 'vm'
    })
})


myApp.run(function($rootScope, $state) {
  console.log("state change");
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    console.log("state change");
    var user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      $rootScope.authenticated = true;
      $rootScope.currentUser = user;

      if (toState.name === "auth") {

        event.preventDefault();
        $state.go('home');
      }
    }

  })

})

myApp.config(['$mdThemingProvider', function($mdThemingProvider) {
  'use strict';

  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
}])

myApp.config(["$mdIconProvider", function($mdIconProvider) {
  $mdIconProvider.iconSet("avatars", '../css/avatars.svg', 24);
}])
