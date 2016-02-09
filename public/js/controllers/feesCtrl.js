(function() {

'use strict';

  angular
    .module('myApp')
    .controller('feesController', feesController)

  function feesController($scope, $resource, $routeParams, Fee, Student) {
    $scope.promise = Fee.query().$promise.then(function(data) {
      $scope.fees = data;
    })

    var student = Student.query().$promise.then(function(data) {
      $scope.students = data;
    })

    var convert_id = function(id) {
      for (var x in $scope.students) {
        if ($scope.students[x].id_no == id) {
          console.log($scope.students[x].id);
          return $scope.students[x].id;
        }
      }
    }

    $scope.id = '';
    $scope.dept_or_credit = [{
      name: 'dept',
      value: 'd'
    }, {
      name: 'credit',
      value: 'c'
    }];
    $scope.transactionData = {
      student_id: '',
      amount: '',
      type: '',
      descr: '',
      dept_or_credit: 'c'
    };
    $scope.makeTransaction = function() {
      $scope.transactionData.student_id = convert_id($scope.id)
      console.log($scope.transactionData);
      Fee.save($scope.transactionData)
    }

  };

})();
