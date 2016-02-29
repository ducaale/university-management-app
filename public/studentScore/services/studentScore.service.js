(function () {
  'use strict';

  angular
    .module('studentScore')
    .factory('StudentScore', StudentScore)

    StudentScore.$inject = ['$resource'];

    function StudentScore($resource) {
      return $resource('api/student/mark')
    }

})();
