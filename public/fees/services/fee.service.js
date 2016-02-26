(function(){
  'use strict';

  angular
    .module('fees')
    .factory('Fee', Fee)

  Fee.$inject = ['$resource'];

  function Fee($resource) {
    return $resource('api/fee/:id', {
      fee_id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }

})();
