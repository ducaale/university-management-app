(function(){
  'use strict';

  angular
    .module('admission')
    .factory('Student', Student)

  Student.$inject = ['$resource'];

  function Student($resource) {
    return $resource('api/student/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }
})();
