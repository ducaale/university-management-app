(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('studentFeesController', studentFeesController)

  function studentFeesController($resource, $stateParams, StudentFee) {
    var vm = this;
    vm.studentFees = [];
    vm.promise = studentFee;

    var studentFee = StudentFee.query({student_id: $stateParams.student_id}).$promise.then(function(data) {
      vm.studentFees = data;
    })
  }
})();
