(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('staffsController', staffsController)

  function staffsController($scope, $resource, Staff) {
    $scope.staffData = {
      name: '',
      tel: '',
      date_of_birth: '',
      enrollment_date: new Date()
    };

    var staffs = Staff.query().$promise.then(function(data) {
      $scope.staffs = data;
    })

    $scope.register = function() {
      Staff.save($scope.staffData).$promise.then(function(data) {
        $scope.staff = data;
      })

    }
  }

})();
