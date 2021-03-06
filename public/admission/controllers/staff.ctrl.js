(function(){
  'use strict';

  angular
    .module('admission')
    .controller('staffController', staffController)

  function staffController($scope, $resource, $stateParams, Staff) {

    $scope.staff = [];

    var staff = Staff.get({
      id: $stateParams.id
    }).$promise.then(function(data) {
      data.date_of_birth = new Date(data.date_of_birth);
      $scope.staff = data;
    })

    $scope.edit = function() {
      Staff.update($scope.staff).$promise.then(function(data) {
        console.log('saved successfully');
      })
    }

  };

})();
