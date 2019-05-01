angular.module('eclipperApp')
  .controller('paymentCtrl', function ($uibModal,paymentModel,localStorageService) {
    var self = this,
	init = function () {
    var user = localStorageService.get("userData");
    self.payment = angular.copy(paymentModel.payment);
    if(user != null){
      self.payment.clipperId = user.clipperId;
    }
  }
  self.addFunds = function() {
    item="";
  $uibModal.open({
     animation: true,
     templateUrl: 'addFunds.html',
     controller: 'addFundsCtrl',
     controllerAs: 'afModal',
     windowClass: 'addFunds',
     backdrop: false,
     resolve: {
       item: function () {
         return item;
       }
     }
   }).result.then(function() {

     }, function (){
       //TODO ERROR block
     });
   }
   self.addMethods = function() {

   $uibModal.open({
      animation: true,
      templateUrl: 'paymentMethods.html',
      controller: 'addMethodsCtrl',
      controllerAs: 'amModal',
      windowClass: 'addFunds',
      backdrop: false
    }).result.then(function(pm) {
        console.log(self.payment);
        self.payment.paymentMethods.push(pm);

      }, function (){
        //TODO ERROR block
      });
    }




  init();
  })
  .controller('addFundsCtrl', function ($uibModalInstance, item) {

	  	var self = this,
	  	init = function () {
        self.methods = item;
        self.amount = 0.00;
	  	}
      self.ok = function () {
      $uibModalInstance.close();
      };

  self.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    init();
  })
  .controller('addMethodsCtrl', function ($uibModalInstance, paymentModel) {

      var self = this,
      init = function () {
        self.paymentMethod = angular.copy(paymentModel.paymentMethod);
        self.types = self.getTypes();
      }
      self.ok = function () {
      $uibModalInstance.close(self.paymentMethod);
      };

  self.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    self.getTypes = function () {
      return [{"name":"Visa","checked":true},{"name":"Debit","checked":false},{"name":"Cash","checked":false}]
    }
    init();
  });
