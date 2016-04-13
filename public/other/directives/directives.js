(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('toolbar', toolbar)
    .directive('sidenav', sidenav)

  function toolbar() {
    return {
      restrict: 'E',
      templateUrl: 'other/partials/toolbar.html',
      scope: {
        title: '@'
      },
      controllerAs: 'vm',
      controller: function($mdSidenav, Auth) {
        var vm = this;
        vm.toggleSideNav = function(menuId) {
          $mdSidenav(menuId).toggle();
        }

        vm.logout = function() {
          Auth.logout();
        }
      }
    }
  };

  function sidenav() {
    return {
      restrict: 'E',
      templateUrl: 'other/partials/sidenav.html',
    }
  };

})();
