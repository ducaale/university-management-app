(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('studentController', studentController);

  function studentController($scope, $resource, $routeParams, Student) {
    var student = Student.get({
      id: $routeParams.id
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
