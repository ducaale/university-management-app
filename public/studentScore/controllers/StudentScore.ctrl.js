(function() {
  'use strict';

  angular
    .module('studentScore')
    .controller('studentScoreController', studentScoreController)

  studentScoreController.$inject = ['StudentScore'];

  function studentScoreController(StudentScore, ExamType) {
    var vm = this;
    vm.scores = [];
    vm.examTypes = [];
    vm.selectedExam;

    StudentScore.query().$promise.then(function(result) {
      vm.scores = result
    }, function(error) {
      console.log(error);
    })

  }

})();
