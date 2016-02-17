(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('studentController', studentController);

  function studentController($scope, $resource, $stateParams, Student) {
    var student = Student.get({
      id: $stateParams.id
    }).$promise.then(function(data) {
      data.date_of_birth = new Date(data.date_of_birth);
      $scope.student = data;
    })

    $scope.edit = function() {
      Student.update($scope.student).$promise.then(function(data) {
        console.log('saved successfully');
      })
    }
  }

})();
