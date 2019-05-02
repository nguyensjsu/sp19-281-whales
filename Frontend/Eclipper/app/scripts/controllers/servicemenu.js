/*'use strict';

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
  });*/

/*  'use strict';

angular.module('eclipperApp')
  .controller('ServiceMenuCtrl', function (menuService) {
    var self = this,
        init = function () {
          self.menu = [];
          self.text ="95112";
  }
  self.find = function () {
    console.log("submit");
    menuService.getServiceMenu().then(function (response){
				self.menu = response;
        console.log(self.menu);
			}, function (){
				//TODO ERROR block
			});
  }
  init();
  });*/


  'use strict';

angular.module('eclipperApp')
  .controller('ServiceMenuCtrl', function (menuService, paymentService, localStorageService, paymentModel) {
    var self = this,
        init = function () {
            self.getPaymentAccount();
          //self.menu = [];
          //self.text ="95112";
  }
  self.find = function ( data) {
    var zipcode = data;
    console.log("submit");
    menuService.getServiceMenu(zipcode).then(function (response){
        self.menu = response.data;
        //console.log(self.menu);
      }, function (err){
        //TODO ERROR block
        console.log(err);
      });
  }
  self.placeOrder = function (item) {
    console.log(item);
    self.payment.balance = self.payment.balance - item.cost;
    /*paymentService.payFare(self.payment).then(function(response){
      console.log(self.payment);
    },function(error){
      self.payment.balance = self.payment.balance + item.cost;
      console.log(error);
    });*/
  }
  self.getPaymentAccount = function() {
    var user = localStorageService.get("userData");
    if(user != null || user!= ""){
      paymentService.getPayment(user.clipperId).then(function(response){
        console.log(response);
        self.payment = angular.copy(paymentModel.payment);
      },function(error){
        console.log(error);
      });
    }
  }
  init();
  });
