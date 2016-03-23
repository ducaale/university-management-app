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
        course_id: parseInt(vm.details.course.id),
        exam_type_id: parseInt(vm.details.examType.id),
        batch_id: parseInt(vm.details.batch.id)
      }).$promise.then(function(result) {
        vm.marks = result;
      }, function(error) {
        console.log(error);
      });

    }

    function refreshOriginal() {
      return Score.query({
        course_id: parseInt(vm.details.course.id),
        exam_type_id: parseInt(vm.details.examType.id),
        batch_id: parseInt(vm.details.batch.id)
      }).$promise.then(function(result) {
        original = result;
        save();
      })
    }

    function save() {
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

      for (var x = 0; x < marksData.length; x++) {

        if(!original[x]){continue}

        if (original[x].id == null) {
          Score.save(marksData[x]).$promise.then(function() {
            console.log("saved success");
          })
        } else if (original[x].mark != marksData[x].mark) {
          Score.update(marksData[x]).$promise.then(function() {
            console.log("updated success");
          })
        } else {
          console.log("ignore");
        }
      }
    }


    vm.save = function() {
      refreshOriginal()
    }



  }
})();
