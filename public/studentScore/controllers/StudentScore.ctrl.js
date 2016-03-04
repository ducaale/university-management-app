(function() {
  'use strict';

  angular
    .module('studentScore')
    .controller('studentScoreController', studentScoreController)

  studentScoreController.$inject = ['StudentScore', 'ExamType'];

  function studentScoreController(StudentScore, ExamType) {
    var vm = this;
    vm.scores = [];
    vm.examTypes = [];
    vm.semesters = [1, 2, 3, 4, 5, 6, 7, 8];

    vm.details = {
      semester: '',
      examType: ''
    };

    ExamType.query().$promise.then(function(result) {
      vm.examTypes = result
    })

    vm.query = function() {
      StudentScore.query(vm.details).$promise.then(function(result) {
        vm.scores = result
      }, function(error) {
        console.log(error);
      })
    }


  }

})();
