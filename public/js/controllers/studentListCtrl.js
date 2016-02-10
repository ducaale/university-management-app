(function() {
  'use strict';

  angular.module('myApp')
    .controller('studentsController', studentController)
    .controller('DialogController', DialogController)

  function studentController($resource, $location, $mdDialog, Student, Guardian, Batch, VerifyDelete) {
    var vm = this;

    vm.search = [];
    vm.students = [];
    vm.guardians = [];
    vm.batches = [];
    vm.error;

    vm.registerForm = {
      id_no: '',
      name: '',
      tel: '',
      batch_id: '',
      date_of_birth: '',
      enrollment_date: new Date(),
      guardians_id: '',
      gender_type_id: ''
    };

    vm.selected = [];

    vm.query = {
      limit: 10,
      page: 1
    };

    vm.promise = Student.query().$promise.then(function(data) {
      vm.students = data;
    })

    Guardian.query().$promise.then(function(result) {
      vm.guardians = result;
    }, function(error) {
      console.log(error);
    })

    Batch.query().$promise.then(function(result) {
      vm.batches = result;
    }, function(erro) {
      console.log(error);
    })

    vm.delete = function(user, index) {
      VerifyDelete(user).then(function() {
        user.active = 0;
        console.log(user);
        Student.update(user).$promise.then(function(data) {
          vm.students.splice(index, 1);
          console.log('deleted successfully');
        })
      })
    }

    vm.getBatch = function(student_id, batch_id) {
      for(var x in vm.batches){
        if(vm.batches[x].id == vm.students[student_id].batch_id){
          return vm.batches[x].batch_name;
        }
      }
    }

    vm.register = function(data) {
      Student.save(data);
      vm.students.push(data);
    }

    vm.moreInfo = function(id) {
      $location.path('student/' + id);
    }

    vm.fees = function(student_id) {
      $location.path('student/' + student_id + '/fees');
    }


    vm.showTabDialog = function($event) {
      $mdDialog.show({
        controller: 'DialogController',

        templateUrl: 'partials/dialog.register.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose: true,
        locals: {
          register: vm.register,
          data: vm.registerForm,
          guardians: vm.guardians
        }

      })

    }


  }

  function DialogController($scope, $mdDialog, register, data, guardians) {
    $scope.data = data;
    $scope.guardians = guardians;

    $scope.searchText = '';
    $scope.selectedGuardian = '';

    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.register = function() {
      //insert guardians_id before data being sent
      $scope.data.guardians_id = $scope.selectedGuardian.id
      console.log($scope.data);
      register($scope.data);

      $mdDialog.hide();
    };
  }


})();
