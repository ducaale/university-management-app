(function() {
  'use strict';

  angular
    .module('myApp')
    .factory('Toast', Toast)

  Toast.$inject = ['$mdToast'];

  function Toast($mdToast) {
    return function(state) {
      var toast = $mdToast.simple()
        .textContent(state)
        .action('ok')
        .highlightAction(false)
        .position('bottom' + ' ' + 'left')
      $mdToast.show(toast)
    }
  }

})();
