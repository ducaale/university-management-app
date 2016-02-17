(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('authController', authController)

function authController($auth, $state) {
    var vm = this;

    vm.login = function() {

      var credentials = {
        email: vm.email,
        password: vm.password
      }

      $auth.login(credentials).then(function(data) {
        $state.go('home',{});
      });
    }
}

})();
