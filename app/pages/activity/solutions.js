'use strict';

angular.module('app')
  .config(function ($routeProvider, $person) {
    $routeProvider
      .when('/activity/solutions', {
        templateUrl: 'pages/activity/solutions.html',
        controller: 'SolutionActivity',
        resolve: $person,
        title: ['Solutions', 'Activity']
      });
  })
  .controller('SolutionActivity', function($scope, $routeParams, $api) {
    $scope.solutions = $api.solution_activity();
  });

