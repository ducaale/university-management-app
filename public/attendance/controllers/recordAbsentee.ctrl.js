(function() {
  'use strict';

  angular
    .module('attendance')
    .controller('recordAbsenteeController', recordAbsenteeController)

    recordAbsenteeController.$inject = ['$mdEditDialog', '$filter', '$state','Student', 'Attendance'];

    function recordAbsenteeController($mdEditDialog, $filter, $state, Student, Attendance) {
      var vm = this;

      vm.students = [];
      vm.promise;
      vm.selected = [];
      vm.query = {
        limit: 15,
        page: 1
      };

      vm.promise = Student.query().$promise.then(function(result) {
        vm.students = result
      }, function(error) {
        console.log(error);
      })

      vm.save = function() {
        for(var x in getAbsent()){
          Attendance.save(getAbsent()[x]);
        }
        $state.go("home.attendance");
      }

      function getAbsent() {
        var absent = [];
        for(var x in vm.selected){
          var student_id =  vm.selected[x].id;
          var note = $filter('filter')(vm.students, {id: student_id })[0].note;

          absent.push({student_id: student_id, notes: note});
        }
        return absent;
      }

      vm.editDialog = function(event, student) {
        event.stopPropagation();

        var editDialog = {
          modelValue: student.note,
          placeholder: 'Add a note',
          save: function(input){
            student.note = input.$modelValue;
          },
          targetEvent: event,
          title: 'Add a note',
          validators: {
            'md-maxlength': 24
          }
        };

        $mdEditDialog.small(editDialog);

      };


    }

})();
