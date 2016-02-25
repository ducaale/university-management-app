(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('authController', authController)

function authController($auth, $state, $http, $rootScope) {
    var vm = this;

    vm.loginError = false;
    vm.loginErrorText;

    vm.login = function() {

      var credentials = {
        user_name: vm.user_name,
        password: vm.password
      }

      $auth.login(credentials).then(function() {

        //ger authenticated user
        return $http.get('api/authenticate/user');

      }, function(error) {
        vm.loginError = true;
        vm.loginErrorText = error.data.error;
      }).then(function(response) {

        //extract user from json
        var user = JSON.stringify(response.data.user);
        //save to local storage
        localStorage.setItem('user', user);

        $rootScope.authenticated = true;
        $rootScope.currentUser = response.data.user;

        $state.go('home')
      })
    }
}

})();
