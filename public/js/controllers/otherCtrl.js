(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('otherController', otherController)

    function otherController($resource, Batch, ExamType, Course) {
      var vm = this;

      vm.batches = [];
      vm.courses = [];
      vm.examTypes = [];

      // batches form submit data
      vm.batchForm = {
        batch_name: ''
      }

      // course form submit data
      vm.courseForm = {
        course_code: '',
        course_name: '',
        credits: ''
      }

      // exam types form submit data
      vm.examTypesForm = {
        exam_type: ''
      }

      // batch form methods
      Batch.query().$promise.then(function(result){
        vm.batches = result;
      }, function(error) {
        console.log(error);
      })

      vm.saveBatch = function() {
        Batch.save(vm.batchForm).$promise.then(function(result){
          console.log('success');
          vm.batches.push(result);
        }, function(error){
          console.log(error);
        })
      }

      //course form methods
      Course.query().$promise.then(function(result){
        vm.courses = result;
      }, function(error){
        console.log(error);
      })

      vm.saveCourse = function() {
        Course.save(vm.courseForm).$promise.then(function(result) {
          console.log('success');
          vm.courses.push(result)
        }, function(error) {
          console.log(error);
        })
      }

      //exatype form methods
      ExamType.query().$promise.then(function(result) {
        vm.examTypes = result;
      }, function(error){
        console.log(error);
      })

      vm.saveExamType = function() {
        ExamType.save(vm.examTypesForm).$promise.then(function(result) {
          console.log('success');
          vm.courses.push(result)
        }, function(error) {
          console.log(error);
        })
      }
      

    }
})();
