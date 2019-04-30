'use strict';

angular.module('eclipperApp')
  .controller('ServiceMenuCtrl', function (menuService) {
    var self = this,
	init = function () {
    self.menu = menuService.getServiceMenu();
  }
  self.sumbit = function () {
    self.menu = menuService.getServiceMenu();
  }
  init();
  });
