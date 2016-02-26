(function() {
  'use strict';

  angular
    .module('academic')
    .factory('Batch', Batch)

  Batch.$inject = ['$resource'];

  function Batch($resource) {
    return $resource('api/batch/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }

})();
