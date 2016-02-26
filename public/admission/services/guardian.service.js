(function(){
  'use strict';

  angular
    .module('admission')
    .factory('Guardian', Guardian)

  Guardian.$injector = ['$resource'];

  function Guardian($resource) {
    return $resource('api/guardian/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }

})();
