(function() {
  "use strict";

  angular
    .module('myApp')
    .factory('Auth', Auth)

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
