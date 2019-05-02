angular.module('eclipperApp')
.controller('paymentCtrl', function ($uibModal,paymentModel,localStorageService, paymentService) {
  var self = this,
  init = function () {
    var user = localStorageService.get("userData");
    self.payment = angular.copy(paymentModel.payment);
    if(user != null || user!= ""){
      self.payment.clipperId = user.clipperId;
      paymentService.getPayment(self.payment.clipperId).then(function(response){
        console.log(response);
        self.payment.balance = response.data.balance;
        self.payment.paymentMethods = response.data.paymentMethods;
        console.log(self.payment);
      },function(error){
        console.log(error);
      });
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
          return self.payment;
        }
      }
    }).result.then(function(pm) {
      self.payment = pm;

      self.payment.balance = self.payment.balance + self.payment.funds;
      paymentService.addFunds(self.payment).then(function(response){
          if(response.statusText == "OK"){
            self.payment.funds = parseFloat("0.00");
          }else{
            self.payment.balance = self.payment.balance - self.payment.funds;
          }
      },function(error){
        console.log(error);
        self.payment.balance = self.payment.balance - self.payment.funds;
      });
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
      backdrop: false,
      resolve: {
        item: function () {
          return self.payment.paymentMethods;
        }
      }
    }).result.then(function(pm) {
      console.log(self.payment);
      self.payment.paymentMethods.push(pm);
      paymentService.addPaymentMethod(self.payment).then(function(response){
          console.log(response);
      },function(error){
        console.log(error);
      });

    }, function (){
      //TODO ERROR block
    });
  }




  init();
})
.controller('addFundsCtrl', function ($uibModalInstance, item,paymentModel) {

  var self = this,
  init = function () {
    self.payment = item;
    self.paymentMethod = null;
    if(!(self.payment.paymentMethods.length>0)){
      self.checkedId = "1";
      self.types = self.getTypes();
      self.paymentMethod = angular.copy(paymentModel.paymentMethod)
    }
  }
  self.ok = function () {
    if(self.paymentMethod != null){
      self.paymentMethod.pid = self.payment.paymentMethods.length+1+"";
      var index = self.types.map(function(x){return x.id;}).indexOf(self.checkedId);
      self.paymentMethod.type = self.types[index].name;
      self.payment.paymentMethods.push(self.paymentMethod);
    }
    $uibModalInstance.close(self.payment);
  };

  self.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  self.getTypes = function () {
    return [{"id":"1","name":"Visa"},{"id":"2","name":"Debit"}]
  }

  init();
})
.controller('addMethodsCtrl', function ($uibModalInstance, paymentModel, item) {

  var self = this,
  init = function () {
    self.item = item;
    console.log(self.item);
    self.paymentMethod = angular.copy(paymentModel.paymentMethod);
    self.types = self.getTypes();
    self.checkedType = "1";
  }
  self.ok = function () {
    self.paymentMethod.pid = self.item.length+1+"";
    for(var i=0;i<self.types.length;i++){
      if(self.types[i].id == self.checkedType){
        self.paymentMethod.type = self.types[i].name;
      }
    }
    $uibModalInstance.close(self.paymentMethod);
  };

  self.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  self.getTypes = function () {
    return [{"id":"1","name":"Visa"},{"id":"2","name":"Debit"}]
  }
  init();
});
