var services = angular.module('services', ['ngResource']);

services.factory('Student', ['$resource', function($resource) {

  return $resource('api/student/:id', {
    id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });

}]);


services.factory('Guardian', ['$resource', function($resource) {
  return $resource('api/guardian/:id', {
    id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });
}]);

services.factory('Staff', ['$resource', function($resource) {
  return $resource('api/staff/:id', {
    id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });

}]);



services.factory('Fee', ['$resource', function($resource) {
  return $resource('api/fee/:id', {
    fee_id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });
}]);

services.factory('StudentFee', ['$resource', function($resource) {
  return $resource('api/student/:student_id/fee/:fee_id', {
    student_id: '@student_id',
    fee_id: '@fee_id'
  }, {
    'query': {
      method: 'GET',
      params: {
        student_id: 'student_id'
      },
      isArray: true

    }
  });
}])

services.factory('Course', ['$resource', function($resource) {
  return $resource('api/course/:id', {
    id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });
}]);

services.factory('ExamType', ['$resource', function($resource) {
  return $resource('api/examType/:id', {
    id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });
}]);

services.factory('Mark', ['$resource', function($resource) {
  return $resource('api/mark/:id', {
    id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });
}]);

services.factory('Batch', ['$resource', function($resource) {
  return $resource('api/batch/:id', {
    id: '@id'
  }, {
    'update': {
      method: 'PUT'
    }
  });
}]);

services.factory('Gender', ['$resource', function($resource) {
  return $resource('api/gender/:id', {
    id: '@id'
  }, {});
}]);

services.factory('VerifyDelete', ['$mdDialog', function($mdDialog) {
  return function(user) {
    var confirm = $mdDialog.confirm()
      .title('confirm your choice')
      .content('Are you sure you to delete ' + user.name + ' ?')
      .ok('Delete User')
      .cancel('Cancel')
    return $mdDialog.show(confirm);
  }
}]);

services.factory('Toast', ['$mdToast', function($mdToast) {
  return function(state) {
    var toast = $mdToast.simple()
      .textContent(state)
      .action('ok')
      .highlightAction(false)
      .position('bottom' + ' ' +'left')
      $mdToast.show(toast)
  }
}])
