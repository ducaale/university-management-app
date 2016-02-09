(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('toolbar', toolbar)
    .directive('sideNav', sideNav)

function toolbar(){
  return {
    restrict: 'E',
    templateUrl: 'partials/toolbar.html',
    scope: {
      title: '@'
    },
    controllerAs: 'vm',
    controller: function($mdSidenav){
      var vm = this;
      vm.toggleSideNav = function(menuId){
        $mdSidenav(menuId).toggle();
      }
    }
  }
};

function sideNav(){
  return {
    restrict: 'E',
    templateUrl: 'partials/sideNav.html'
  }
}

})();
