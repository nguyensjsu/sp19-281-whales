'use strict';

/**
 * @ngdoc function
 * @name eclipperApp.controller:MainCtrl
 * @description
 * # UserCtrl
 * Controller of the eclipperApp
 */
angular.module('eclipperApp')
.controller('userCtrl', function ($state, userModel,localStorageService, userService) {
    var self = this,
  init = function () {
  	self.errorMessage = "";
  	var user = localStorageService.get("userData");
    self.user = angular.copy(userModel.user);
    if(user != null || user!= ""){
      	self.user = user;
      }
  }
  self.signup = function () {
  	
    console.log(self.user); 
         userService.signup(self.user).then(function(response){
         	self.errorMessage = "";
         $state.go("login");
      },function(error){
      	console.log(error);
        self.errorMessage = error.data.Message;
        console.log(self.errorMessage);
      });
  }

  self.signin = function () {
         console.log(self.user); 

         userService.signin(self.user).then(function(response){

         localStorageService.set('userData', {"clipperId":self.user.clipperid});
         self.errorMessage = "";
         console.log(response);
         $state.go("services");

      },function(error){
      	console.log(error);
      	self.errorMessage = error.data.Message;
        console.log(self.errorMessage);
      });  
  }
  init();
})
