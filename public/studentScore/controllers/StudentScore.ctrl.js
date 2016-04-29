(function() {
  'use strict';

  angular
    .module('studentScore')
    .controller('studentScoreController', studentScoreController)

  studentScoreController.$inject = ['$rootScope', 'StudentScore', 'StudentSemester'];

  function studentScoreController($rootScope, StudentScore, StudentSemester) {
    var vm = this;

    var result1;
    vm.scores = [];
    var examTypes = [];
    vm.semesters = [];
    var courses = [];
    vm.details = {
      semester: '',
    };

    StudentSemester.query().$promise.then(function(result) {
      result = toArray(result);
      vm.semesters = getSemesters(result);
    })

    vm.query = function() {
      StudentScore.query(vm.details).$promise.then(function(result) {
        process(result)
      }, function(error) {
        console.log(error);
      })
    }

    function process(result) {
      result1 = toArray(result)
      examTypes = getUnique(getExamTypes(result1));
      courses = getUnique(getCourses(result1));
      vm.examTypes = examTypes;
      vm.scores = arrangeArray(result);
    }

    function getTotalMark(course) {
      var total = 0
      for (var i in course) {
          total += course[i].score
      }
      return total
    }

    vm.getAverage = function() {
      var average = 0;
      var total = 0;
      var numCourses = courses.length;
      for (var i in vm.scores) {
        total += vm.scores[i].total
      }
      average = total / numCourses;
      return average;
    }

    function toArray(json) {
      var data = json.map(function(obj) {
        return Object.keys(obj).sort().map(function(key) {
          return obj[key];
        });
      });
      return data
    }

    function arrangeArray(array) {
      var data = [];
      for (var i in courses) {
        data[i] = {
          'course_name': courses[i],
          'scores': []
        }
        for (var j in examTypes) {
          data[i]['scores'][j] = {
            examType: examTypes[j],
            score: 0
          }
        }
      }
      for(var i in array){
        for(var j in data){
          if(array[i].course_name == data[j].course_name){
            var index = getExamIndex(array[i].exam_type) - 1;
            data[j]['scores'][index]['score'] = array[i].mark;
          }
        }
      }
      return appendTotal(data);
    }

    function appendTotal(data) {
      for (var i in data) {
        var totalIndex = examTypes.length;
        var totalMark = getTotalMark(data[i].scores);
        data[i]['total'] = totalMark;

      }
      return data
    }

    function getExamIndex(exam) {
      var index;
      for (var i in examTypes) {
        if (examTypes[i] == exam) {
          index = parseInt(i) + 1
        }
      }
      return index;
    }

    function getExamTypes(array) {
      var examTypes = [];
      for (var i in array) {
        examTypes.push(array[i][1]);
      }
      return examTypes;
    }

    function getCourses(array) {
      var courses = [];
      for (var i in array) {
        courses.push(array[i][0]);
      }
      return courses;
    }

    function getSemesters(array) {
      var semesters = [];
      for (var i in array) {
        semesters.push(array[i][0])
      }
      return semesters
    }

    function getUnique(array) {
      var newArray = [];
      for (var i in array) {
        if (newArray.indexOf(array[i]) == -1) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    }

    vm.print = function(divName) {
      var userInfo = '<p>ID: ' + $rootScope.currentUser.id + '</p>' + '<p>name: ' + $rootScope.currentUser.name + '</p>' + '<p>semester: ' + vm.details.semester + '</p>'
      var printContents = document.getElementById(divName).innerHTML;
      var popupWin = window.open('', '', '');
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/print.css" /></head><body onload="window.print()">' + userInfo + printContents + '</body></html>');
      popupWin.document.close();
    }

  }

})();
