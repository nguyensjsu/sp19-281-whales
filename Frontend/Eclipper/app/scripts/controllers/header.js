'use strict';

angular.module('eclipperApp')
  .controller('HeaderCtrl', function ($state, localStorageService) {
    var self = this,
    init = function(){
      var user = localStorageService.get("userData");
      if(user != null){
        self.showLogout = true;
      }
    }
    self.logout = function () {
      localStorageService.remove("userData");
      $state.go("home");
      self.showLogout = false;
    }
    init();
  });
