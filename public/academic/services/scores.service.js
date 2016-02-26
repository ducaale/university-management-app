(function() {
  'use strict';

  angular
    .module('academic')
    .factory('Score', Score)

  Score.$inject = ['$resource'];

  function Score($resource) {
    return $resource('api/mark/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }

})();
