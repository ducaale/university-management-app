(function(){
  'use strict';

  angular
    .module('academic')
    .factory('ExamType', ExamType)

  ExamType.$inject = ['$resource'];

  function ExamType($resource) {
    return $resource('api/examType/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }

})();
