(function() {

  'use strict';

  angular
    .module('myApp')
    .controller('feesController', feesController)
    .controller('Dialog2Controller', Dialog2Controller)

  function feesController($resource, $routeParams, $mdDialog, Fee, Student, Toast) {
    var vm = this;
    vm.students = [];
    vm.fees = [];
    vm.selectedStudent = [];
    vm.searchStudent = "";
    vm.error;

    vm.dept_or_credit = [{
      name: 'dept',
      value: 'd'
    }, {
      name: 'credit',
      value: 'c'
    }];

    vm.transactionData = {
      student_id: '',
      amount: '',
      type: '',
      descr: '',
      dept_or_credit: 'c'
    };

    vm.selected = [];

    vm.query = {
      limit: 10,
      page: 1
    };

    vm.promise = Fee.query().$promise.then(function(data) {
      vm.fees = data;
    }, function(error) {
      vm.error = error;
    })

    Student.query().$promise.then(function(data) {
      vm.students = data;
    })

    vm.refresh = function() {
      Fee.query().$promise.then(function(result) {
        vm.fees = result;
      }, function(error) {
        console.log(error);
      })
    }

    vm.dept_or_credit = function(debit_or_credit) {
      vm.transactionData.dept_or_credit = debit_or_credit;
    }

    vm.makeTransaction = function(transactionData) {
      console.log(transactionData);
      Fee.save(vm.transactionData).$promise.then(function(success) {
        Toast('success');
        vm.refresh();
      }, function(error) {
        Toast('error');
      })
    }

    vm.openDialog = function($event) {
      $mdDialog.show({
        controller: 'Dialog2Controller',
        controllerAs: 'vm',
        templateUrl: 'partials/dialog.transaction.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        locals: {
          makeTransaction: vm.makeTransaction,
          transactionData: vm.transactionData,
          students: vm.students,
          searchStudent: vm.searchStudent,
          selectedStudent: vm.selectedStudent

        }
      })
    }

  };

  function Dialog2Controller($mdDialog, makeTransaction, transactionData, students, selectedStudent, searchStudent) {
    var vm = this;

    vm.transactionData = transactionData;
    vm.selectedStudent = selectedStudent;
    vm.searchStudent = searchStudent;
    vm.students = students;


    vm.makeTransaction = function() {
      vm.transactionData.student_id = vm.selectedStudent.id;
      makeTransaction(vm.transactionData);
      $mdDialog.hide();
    }

    vm.hide = function() {
      $mdDialog.hide();
    }

    vm.cancel = function() {
      $mdDialog.cancel();
    }

  }
})();
