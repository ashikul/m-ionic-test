'use strict';
angular.module('main')
.controller('Single-setCtrl', function ($log, $scope, $stateParams) {

  $log.log('Hello from your Controller: Single-setCtrl in module main:. This is your controller:', this);



// get the set code
  $scope.setCode = $stateParams.setCode;




});
