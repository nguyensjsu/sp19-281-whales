angular.module('eclipperApp')
  .controller('paymentCtrl', function ($uibModal,paymentModel,localStorageService) {
    var self = this,
	init = function () {
    var user = localStorageService.get("userData");
    self.payment = angular.copy(paymentModel.payment);
    if(user != null){
      self.payment.clipperId = user.clipperId;
    }
    console.log(self.payment)
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
         return self.payment;
       }
     }
   }).result.then(function(pm) {
      console.log(pm);
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
        self.payment = item;
	  	}
      self.ok = function () {
      $uibModalInstance.close(self.payment);
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
        self.checkedType = "1";
      }
      self.ok = function () {
        for(var i=0;i<self.types.length;i++){
            if(self.types[i].id == self.checkedType){
                self.paymentMethod.type = self.types[i].name;
            }
        }
        $uibModalInstance.close(self.paymentMethod);
      };
      self.radioCheck = function() {
        console.log(self.types);
      }

  self.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    self.getTypes = function () {
      return [{"id":"1","name":"Visa"},{"id":"2","name":"Debit"}]
    }
    init();
  });
