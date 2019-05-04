'use strict';

angular.module('eclipperApp')
  .controller('transCtrl', function (localStorageService, transService) {
    var self = this,
    init = function () {
      console.log("Starting trans controller")
      self.user = localStorageService.get("userData");
      //if(user != null){
      //  self.trans.clipperId = user.clipperId;
      //}
      console.log(self.user)

      transService.getTransHistory().then(function (response){
				self.trans = response.data;
        console.log( self.trans);
			}, function (){
				//TODO ERROR block
			});
    }

    self.addTrans = function () {
      console.log("submit");
      transService.addTransaction().then(function (response){
          self.menu = response;
          console.log(self.menu);
        }, function (){
          //TODO ERROR block
        });
    }

  init();
  });
