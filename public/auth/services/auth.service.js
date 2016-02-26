(function() {
  "use strict";

  angular
    .module('auth')
    .factory('Auth', Auth)

  Auth.$inject = ['$auth', '$rootScope', '$state'];

  function Auth($auth, $rootScope, $state) {

    function logout() {
      $auth.logout().then(function() {
        localStorage.removeItem('user');
        $rootScope.authenticated = false;
        $rootScope.currentUser = null;
        $state.go('auth');
      })
    }

    return {
        logout: logout,
    }

  }
})();
