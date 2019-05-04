'use strict';

angular.module('eclipperApp')
  .controller('HeaderCtrl', function ($state, localStorageService) {
    var self = this,
    init = function(){

    }
    self.logout = function () {
      localStorageService.remove("userData");
      $state.go("home");
    }
    init();
  });
