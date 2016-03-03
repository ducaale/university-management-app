'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'admission',
  'academic',
  'attendance',
  'auth',
  'fees',
  'studentScore',
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
      url: '/students/:id',
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
    .state('home.recordAttendance', {
      url: '/attendance/record',
      templateUrl: 'attendance/partials/recordAbsentee.html',
      controller: 'recordAbsenteeController',
      controllerAs: 'vm'
    })
    .state('home.other', {
      url: '/other',
      templateUrl: 'academic/partials/other.html',
      controller: 'otherController',
      controllerAs: 'vm'
    })
    .state('home.studentScore', {
      url: '/studentScore',
      templateUrl: 'studentScore/partials/studentScore.html',
      controller: 'studentScoreController',
      controllerAs: 'vm'
    })

})


myApp.run(function($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function(event, toState) {

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
  $mdIconProvider
    .iconSet("avatars", 'css/svg/avatars.svg', 24)
    .icon("menu", "css/svg/ic_menu_white_24px.svg", 24)
    .icon("delete", "css/svg/ic_delete_black_24px.svg", 24)
    .icon("search", "css/svg/ic_search_black_24px.svg", 24)
    .icon("book", "css/svg/ic_book_black_24px.svg", 24)
    .icon("attach_money", "css/svg/ic_attach_money_white_24px.svg", 24)
    .icon("add", "css/svg/ic_add_white_24px.svg", 24)
    .icon("edit", "css/svg/ic_edit_white_24px.svg", 24)
    .icon("more_vert_black", "css/svg/ic_more_vert_black_24px.svg", 24)
    .icon("more_vert_white", "css/svg/ic_more_vert_white_24px.svg", 24)
    .icon("info", "css/svg/ic_info_black_24px.svg", 24)
    .icon("credit", "css/svg/ic_credit_card_white_24px.svg", 24)
    .icon("save", "css/svg/ic_save_white_24px.svg", 24)
}])
