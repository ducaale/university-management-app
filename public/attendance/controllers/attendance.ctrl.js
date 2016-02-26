(function() {
  'use strict'
  angular
    .module('attendance')
    .controller('attendanceController', attendanceController);

    function attendanceController(Attendance) {
      var vm = this;
      vm.attandance = [];

      Attendance.query().$promise.then(function(result) {
        vm.attendance = result
      }, function(error) {
        console.log(error);
      })
    }
})();
