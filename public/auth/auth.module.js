(function() {
  'use strict';

  angular
    .module('auth', ['ui.router', 'satellizer'])

  .config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide) {

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
  })

  .run(function($rootScope, $state) {

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

})();
