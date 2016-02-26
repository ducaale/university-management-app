(function() {
  'use strict';

  angular
    .module('admission')
    .factory('Gender', Gender)

  Gender.$inject = ['$resource'];

  function Gender($resource) {
    return $resource('api/gender/:id', {
      id: '@id'
    }, {});
  }

})();
