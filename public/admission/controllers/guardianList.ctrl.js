(function() {
  'use strict',

  angular
  .module('admission')
  .controller('guardiansController', guardiansController)

function guardiansController($resource, Guardian) {
  var vm = this;

  vm.guardians = [];
  vm.guardianForm = {
    name: '',
    tel: '',
    date_of_birth: ''
  }

  Guardian.query().$promise.then(function(result) {
    vm.guardians = result;
  }, function(error) {
    console.log(error);
  })

  vm.save = function() {
    Guardian.save(vm.guardianForm).$promise.then(function() {
      console.log('success');
      vm.guardians.push(vm.guardianForm)
    }, function(error) {
      console.log(error);
    })
  }

}
})();
