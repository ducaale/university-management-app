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
      controllerAs: 'vm',
      controller: function($mdSidenav, $rootScope, $state) {
        var vm = this;
        vm.adminStates = [{
          name: 'students',
          url: 'home.students'
        }, {
          name: 'guardians',
          url: 'home.guardians'
        }, {
          name: 'staffs',
          url: 'home.staffs'
        }, {
          name: 'fees',
          url: 'home.fees'
        }, {
          name: 'scores',
          url: 'home.scores'
        }, {
          name: 'attendance',
          url: 'home.attendance'
        }, {
          name: 'other',
          url: 'home.other'
        }]

        vm.studentStates = [{
          name: 'scores',
          url: 'home.studentScore'
        }]

        vm.getStates = function() {
          var states = [];
          if($rootScope.currentUser && $rootScope.currentUser.role == 'admin'){
            states = vm.adminStates;
          }
          else {
            states = vm.studentStates;
          }
          return states;
        }

        vm.getIcon = function() {
          var icon = '';
          if($rootScope.currentUser){
            $rootScope.currentUser.gender_type == 'female' ? icon = 'avatars:svg-6' : icon = 'avatars:svg-1';
          }
          return icon;
        }

        vm.toggleSideNav = function() {
            $mdSidenav('left').toggle();
        }

      }
    }
  };

})();
