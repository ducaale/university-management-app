(function() {
  'use strict';

  angular
    .module('attendance')
    .factory('Attendance', Attendance)

  Attendance.$inject = ['$resource'];

  function Attendance($resource) {
    return $resource('api/attendence/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }

})();
