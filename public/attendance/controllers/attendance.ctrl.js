(function() {
  'use strict'
  angular
    .module('attendance')
    .controller('attendanceController', attendanceController);

    function attendanceController(Attendance, Student) {
      var vm = this;
      vm.attandance = [];
      vm.students = [];

      Attendance.query().$promise.then(function(result) {
        vm.attendance = result
      }, function(error) {
        console.log(error);
      })

      Student.query().$promise.then(function(result) {
        vm.students = result
      }, function(error) {
        console.log(error);
      })

    }
})();
