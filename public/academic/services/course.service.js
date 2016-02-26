(function(){
  'use strict';

  angular
    .module('academic')
    .factory('Course', Course)

    Course.$inject = ['$resource']

    function Course($resource) {
      return $resource('api/course/:id', {
        id: '@id'
      }, {
        'update': {
          method: 'PUT'
        }
      });
    }

})();
