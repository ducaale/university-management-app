<!DOCTYPE html>
<html lang="en" ng-app="myApp">

<head>
  <meta charset="utf-8"/>
  <title>My AngularJS App</title>
  <!-- Angular Material style sheet -->
  <link rel="stylesheet" href="bower_components/angular-material/angular-material.css"/>

  <!-- material table style sheet -->
  <link href="bower_components/angular-material-data-table/dist/md-data-table.min.css" rel="stylesheet" type="text/css" />

  <!-- fonts & icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  <link href="http://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />

  <!-- angular loading-bar css-->
  <link rel="stylesheet" href="bower_components\angular-loading-bar\build\loading-bar.min.css"/>

  <!-- my stylesheet -->
  <link rel="stylesheet" href="css/master.css" media="screen" title="no title" charset="utf-8"/>

</head>

<body>


  <div ui-view layout="column" id="view"></div>




  <script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/angular-route/angular-route.js"></script>
  <script src="bower_components/angular-resource/angular-resource.js"></script>
  <script src="bower_components/angular-animate/angular-animate.js"></script>

  <script src="bower_components/angular-aria/angular-aria.min.js"></script>
  <script src="bower_components/angular-messages/angular-messages.min.js"></script>

  <!-- Angular Material Library -->
  <script src="bower_components/angular-material/angular-material.js"></script>

  <!-- angular ui-router -->
  <script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>

  <!-- material table module -->
  <script src="bower_components/angular-material-data-table/dist/md-data-table.min.js"></script>

  <!-- angular loading bar -->
  <script src="bower_components\angular-loading-bar\build\loading-bar.min.js"></script>

  <!-- satellizer for jwt auth-->
  <script src="bower_components\satellizer\satellizer.js"></script>


  <script src="app.module.js"></script>


  <!-- admission files -->
  <script src="admission/admission.module.js"></script>
  <script src="admission/controllers/guardianList.ctrl.js"></script>
  <script src="admission/controllers/staff.ctrl.js"></script>
  <script src="admission/controllers/staffList.ctrl.js"></script>
  <script src="admission/controllers/student.ctrl.js"></script>
  <script src="admission/controllers/studentList.ctrl.js"></script>
  <script src="admission/services/gender.service.js"></script>
  <script src="admission/services/guardian.service.js"></script>
  <script src="admission/services/staff.service.js"></script>
  <script src="admission/services/student.service.js"></script>

  <!-- academic files -->
  <script src="academic/academic.module.js"></script>
  <script src="academic/controllers/scores.ctrl.js"></script>
  <script src="academic/controllers/other.ctrl.js"></script>
  <script src="academic/services/batch.service.js"></script>
  <script src="academic/services/course.service.js"></script>
  <script src="academic/services/examType.service.js"></script>
  <script src="academic/services/scores.service.js"></script>

  <!-- fees files -->
  <script src="fees/fees.module.js"></script>
  <script src="fees/controllers/fees.ctrl.js"></script>
  <script src="fees/services/fee.service.js"></script>

  <!-- attendance files -->
  <script src="attendance/attendance.module.js"></script>
  <script src="attendance/controllers/attendance.ctrl.js"></script>
  <script src="attendance/services/attendance.service.js"></script>

  <!-- auth files -->
  <script src="auth/auth.module.js"></script>
  <script src="auth/controllers/auth.ctrl.js"></script>
  <script src="auth/services/auth.service.js"></script>

  <!-- other files -->
  <script src="other/services/toast.service.js"></script>
  <script src="other/services/verifyDelete.service.js"></script>
  <script src="other/directives/directives.js"></script>


</body>

</html>
