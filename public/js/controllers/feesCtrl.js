(function() {

  'use strict';

  angular
    .module('myApp')
    .controller('feesController', feesController)

  function feesController($resource, $routeParams, Fee, Student) {
    var vm = this;
    vm.id;
    vm.students = [];
    vm.fees = [];
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

    var convert_id = function(id) {
      for (var x in vm.students) {
         console.log(vm.students[x].id);
          if (vm.students[x].id_no === id) {
            console.log(vm.students[x]);
            return vm.students[x].id;
          }

      }
    }
    vm.makeTransaction = function() {
      vm.transactionData.student_id = convert_id(vm.transactionData.student_id)
      console.log(vm.transactionData);
      Fee.save(vm.transactionData)
    }

  };

})();
