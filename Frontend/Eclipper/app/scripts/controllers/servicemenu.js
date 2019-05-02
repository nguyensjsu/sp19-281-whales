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
.controller('ServiceMenuCtrl', function (menuService, paymentService, localStorageService, paymentModel, $uibModal, $state) {
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
    var user = localStorageService.get("userData");
    if(user != null || user!= ""){
      if(self.payment.balance < parseFloat(item.cost)){
        self.popup("Please recharge your account first.");
      }else{
        self.payment.balance = self.payment.balance.toFixed(2) - parseFloat(item.cost).toFixed(2);
        paymentService.payFare(self.payment).then(function(response){
          self.popup("Service ordered.");
        },function(error){
          self.payment.balance = self.payment.balance.toFixed(2) + parseFloat(item.cost).toFixed(2);
          console.log(error);
        });
      }
    }else{
      self.popup("Please Login to order the service.");
    }
  }
  self.getPaymentAccount = function() {
    var user = localStorageService.get("userData");
    if(user != null || user!= ""){
      paymentService.getPayment(user.clipperId).then(function(response){
        console.log(response);
        self.payment = angular.copy(paymentModel.payment);
        self.payment = response.data;
      },function(error){
        console.log(error);
      });
    }
  }

  self.popup = function (message) {

    $uibModal.open({
      animation: true,
      templateUrl: 'views/warning.html',
      controller: 'WarningCtrl',
      controllerAs: 'wModal',
      windowClass: 'warning',
      backdrop: true,
      resolve: {
        item: function () {
          return message
        }
      }
    }).result.then(function() {
      if(message == "Please recharge your account first." || message == "Service ordered."){
        $state.go("payment");
      }

    }, function (){
      //TODO ERROR block
    });
  }


  init();
});
