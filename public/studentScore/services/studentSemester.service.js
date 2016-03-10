(function() {
  'use strict';

  angular
    .module('studentScore')
    .factory('StudentSemester', StudentSemester)

  StudentSemester.$inject = ["$resource"];

  function StudentSemester($resource) {
    return $resource('api/student/semester')
  }

})();
