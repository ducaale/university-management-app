(function(){
  'use strict';

  angular
    .module('admission')
    .factory('Staff', Staff)

  Staff.$inject = ['$resource'];

  function Staff($resource) {
    return $resource('api/staff/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }

})();
