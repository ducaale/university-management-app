(function() {
  'use strict'
  angular
    .module('attendance')
    .controller('attendanceController', attendanceController);

    function attendanceController(Attendance) {
      var vm = this;
      vm.absents = [];


      Attendance.query().$promise.then(function(result) {
        vm.absents = result
      }, function(error) {
        console.log(error);
      })

    }
})();
