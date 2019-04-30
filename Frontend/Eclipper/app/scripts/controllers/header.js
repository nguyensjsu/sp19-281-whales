'use strict';

angular.module('eclipperApp')
  .controller('HeaderCtrl', function ($scope,$state) {
    $scope.currentState = $state.current.name;
    console.log($scope.currentState);
  });
