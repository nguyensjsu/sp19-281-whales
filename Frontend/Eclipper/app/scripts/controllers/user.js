'use strict';

/**
 * @ngdoc function
 * @name eclipperApp.controller:MainCtrl
 * @description
 * # UserCtrl
 * Controller of the eclipperApp
 */
angular.module('eclipperApp')
.controller('userCtrl', function ($state, userModel,localStorageService, userService, paymentService) {
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
          self.user = response.data;
          localStorageService.set('userData', {"clipperId":self.user.clipperid});
          console.log(response);
          console.log("storage"+localStorageService.get("userData"));
          paymentService.createPaymentAccount(self.user.clipperid).then(function(response){
              console.log("payment account created");
               $state.go("login");
          },function(error){

          });
      },function(error){
      	console.log(error);
        self.errorMessage = error.data.Message;
        console.log(self.errorMessage);
      });
  }

  self.signin = function () {
         console.log(self.user);

         userService.signin(self.user).then(function(response){

         localStorageService.set('userData', {"clipperId":self.user.clipperId});
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
