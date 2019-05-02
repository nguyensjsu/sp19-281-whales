'use strict';

/**
 * @ngdoc function
 * @name eclipperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eclipperApp
 */
angular.module('eclipperApp')
  .controller('WarningCtrl', function ($uibModalInstance, item) {
    var self = this,
    init = function () {
      self.message = item;
    }
    self.ok = function (){
      $uibModalInstance.close();
    }
    init();
  });
