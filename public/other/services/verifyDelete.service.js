(function() {
  'use strict';

  angular
    .module('myApp')
    .factory('VerifyDelete', VerifyDelete)

  VerifyDelete.$inject = ['$mdDialog'];

  function VerifyDelete($mdDialog) {
    return function(user) {
      var confirm = $mdDialog.confirm()
        .title('confirm your choice')
        .content('Are you sure you to delete ' + user.name + ' ?')
        .ok('Delete User')
        .cancel('Cancel')
      return $mdDialog.show(confirm);
    }
  }

})();
