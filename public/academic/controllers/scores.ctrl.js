(function() {
  'use strict';

  angular
    .module('academic')
    .controller('scoresController', scoresController)

  function scoresController($resource, Score, Course, ExamType, Batch) {
    var vm = this;

    vm.batches = [];

    vm.marks = [];

    vm.courses = [];

    vm.examTypes = [];

    vm.details = {
      course: '',
      examType: '',
      date: '',
      batch: '',
      semester: ''
    };

    var marksData = [];

    var original = [];


    Score.query().$promise.then(function(result) {
      original = angular.copy(result);
      vm.marks = result;
    }, function(error) {
      console.log(error);
    });

    Course.query().$promise.then(function(result) {
      vm.courses = result;
    }, function(error) {
      console.log(error);
    });

    ExamType.query().$promise.then(function(result) {
      vm.examTypes = result;
    }, function(error) {
      console.log(error);
    });

    Batch.query().$promise.then(function(result) {
      vm.batches = result;
    }, function(error) {
      console.log(error);
    });

    vm.query = function() {
      Score.query({
        exam_type_id: parseInt(vm.details.course.id),
        course_id: parseInt(vm.details.examType.id),
        batch_id: parseInt(vm.details.batch.id)
      }).$promise.then(function(result) {
        vm.marks = result;
        original = angular.copy(result);
      }, function(error) {
        console.log(error);
      });

    }

    vm.isMatch = function(x) {
      if (marksData[x].mark == original[x].mark &&
        marksData[x].course_id == original[x].course_id &&
        marksData[x].exam_type_id == original[x].exam_type_id) {
        return true;
      } else {
        return false;
      }
    }

    vm.save = function() {

      marksData = [];
      for (var x in vm.marks) {

        marksData.push({
          id: vm.marks[x].id,
          student_id: vm.marks[x].student_id,
          course_id: vm.details.course.id,
          exam_type_id: vm.details.examType.id,
          mark: vm.marks[x].mark,
          exam_date: vm.details.date,
          semester: vm.details.semester,
          filled_by: vm.marks.filled_by
        });


      }
      for (var x in marksData) {
        if (marksData[x].mark != null) {
          if (original[x].id == null) {
            console.log(original[x]);
            Score.save(marksData[x]);
            console.log(original[x]);
          } else if (vm.isMatch(x) == false) {
            console.log('update');
            console.log(original[x]);
            console.log(marksData[x]);
            Score.update(marksData[x]);
          }
        }
      }
    }
    vm.query();


  }
})();
