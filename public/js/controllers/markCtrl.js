(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('markController', markController)

  function markController($resource, Mark, Course, ExamType, Batch) {
    var vm = this;

    vm.batches = [];

    vm.marks = [];

    vm.courses = [];

    vm.examTypes = [];

    vm.details = {
      course: '',
      examType: '',
      date: '',
      batch: ''
    };

    var marksData = [];

    var original = [];


    Mark.query().$promise.then(function(result) {
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
      Mark.query({
        exam_type_id: parseInt(vm.details.course),
        course_id: parseInt(vm.details.examType),
        batch: vm.details.batch
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
          course_id: vm.details.course,
          exam_type_id: vm.details.examType,
          mark: vm.marks[x].mark,
          exam_date: vm.details.date
        });


      }
      for (var x in marksData) {
        if (marksData[x].mark != null) {
          if (original[x].id == null) {
            console.log(original[x]);
            Mark.save(marksData[x]);
            console.log(original[x]);
          } else if (vm.isMatch(x) == false) {
            console.log('update');
            console.log(original[x]);
            console.log(marksData[x]);
            Mark.update(marksData[x]);
          }
        }
      }
    }
    vm.query();


  }
})();
