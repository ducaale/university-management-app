<!DOCTYPE html>
 <html lang="en" ng-app="myApp">
<head>
  <meta charset="utf-8">
  <title>My AngularJS App</title>
  <!-- Angular Material style sheet -->
  <link rel="stylesheet" href="bower_components/angular-material/angular-material.min.css">

  <!-- material table style sheet -->
  <link href="bower_components/angular-material-data-table/dist/md-data-table.min.css"
  rel="stylesheet" type="text/css"/>

  <!-- fonts & icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="http://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />

  <!-- angular loading-bar css-->
<link rel="stylesheet" href="bower_components\angular-loading-bar\build\loading-bar.min.css" >

<!-- my stylesheet -->
<link rel="stylesheet" href="css/master.css" media="screen" title="no title" charset="utf-8">

</head>
<body layout="column">


<div ui-view></div>




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


  <script src="js/app.js"></script>

  <!-- controllers -->
  <script src="js/controllers/studentListCtrl.js"></script>
  <script src='js/controllers/studentCtrl.js'></script>
  <script src='js/controllers/guardianListCtrl.js'></script>
  <script src='js/controllers/staffListCtrl.js'></script>
  <script src='js/controllers/staffCtrl.js'></script>
  <script src='js/controllers/feesCtrl.js'></script>
  <script src='js/controllers/studentFeesCtrl.js'></script>
  <script src='js/controllers/markCtrl.js'></script>
  <script src="js/controllers/attendanceCtrl.js"></script>
  <script src='js/controllers/otherCtrl.js'></script>
  <script src='js/controllers/authCtrl.js'></script>

  <!-- services -->
  <script src="js/services.js"></script>

  <!-- directives -->
  <script src="js/directives.js"></script>

</body>
</html>
