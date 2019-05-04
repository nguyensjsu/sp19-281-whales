angular.module('eclipperApp')
.controller('paymentCtrl', function ($uibModal,paymentModel,localStorageService, paymentService, $state) {
  var self = this,
  init = function () {
    self.user = localStorageService.get("userData");
    self.payment = angular.copy(paymentModel.payment);
    if(!self.isEmpty(self.user)){
      self.payment.clipperId = self.user.clipperId;
      paymentService.getPayment(self.payment.clipperId).then(function(response){
        console.log(response);
        self.payment.balance = response.data.balance.toFixed(2);
        if(!self.isEmpty(response.data.paymentMethods)){
          self.payment.paymentMethods = response.data.paymentMethods;
          for(var i=0;i<self.payment.paymentMethods.length;i++){
            self.payment.paymentMethods[i].pid = i+1;
            self.payment.paymentMethods[i].maskCard = self.payment.paymentMethods[i].cardNumber.replace(/\d(?=\d{4})/g, "*");
          }
          console.log(self.payment);
        }
      },function(error){
        console.log(error);

      });
    }
  }
  self.addFunds = function() {
    if(self.isEmpty(self.user)){
      self.popup("Please login first.");
    } else{
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

        self.payment.balance = parseFloat(self.payment.balance) + parseFloat(self.payment.funds);
        /* SERVICE CALL ADD FUNDS */
        paymentService.addFunds(self.payment).then(function(response){
          if(response.statusText == "OK"){
            self.payment.funds = parseFloat("0.00");

          }else{
            self.payment.balance = parseFloat(self.payment.balance) - parseFloat(self.payment.funds);
          }
        },function(error){
          console.log(error);
          self.payment.balance = parseFloat(self.payment.balance)- parseFloat(self.payment.funds);
        });
      }, function (){
        //TODO ERROR block
        console.log("cancel");
      });
    }
  }
  self.addMethods = function() {
    if(self.user == null || self.user == ""){
      self.popup("Please login first.");
    }
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

      console.log(pm);
      self.payment.paymentMethods.push(pm);
      self.payment.balance = parseFloat(self.payment.balance);
      paymentService.addPaymentMethod(self.payment).then(function(response){
        console.log(response);
      },function(error){
        console.log(error);
      });

    }, function (){
      //TODO ERROR block
    });
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
      if(message == "Please login first."){
        $state.go("login");
      }
    }, function (){
      //TODO ERROR block
    });
  }

  self.isEmpty = function(obj) {
    if(obj == null)
    return true;
    else if (obj.length == 0)
    return true;
    return false;
  }

  init();
})
.controller('addFundsCtrl', function ($uibModalInstance, item,paymentModel) {

  var self = this,
  init = function () {
    self.error = false;
    self.payment = item;
    self.paymentMethod = null;
    self.checkedId = "1";
    self.types = self.getTypes();
    if(self.isEmpty(self.payment.paymentMethods)){
      self.paymentMethod = angular.copy(paymentModel.paymentMethod)
    }
  }
  self.ok = function () {
    if(parseFloat(self.payment.funds)>0){
      if(self.paymentMethod != null){
        self.paymentMethod.pid = self.payment.paymentMethods.length+1+"";
        var index = self.types.map(function(x){return x.id;}).indexOf(self.checkedId);
        self.paymentMethod.type = self.types[index].name;
        self.paymentMethod.maskCard = self.paymentMethod.cardNumber.replace(/\d(?=\d{4})/g, "*");
        self.payment.paymentMethods.push(self.paymentMethod);
      }
      $uibModalInstance.close(self.payment);
    }else {
      self.error = true;
    }
  };

  self.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  self.getTypes = function () {
    return [{"id":"1","name":"Credit"},{"id":"2","name":"Debit"}]
  }
  self.isEmpty = function(obj) {
    if(obj == null)
    return true;
    else if (obj.length == 0)
    return true;
    return false;
  }

  init();
})
.controller('addMethodsCtrl', function ($uibModalInstance, paymentModel, item) {

  var self = this,
  init = function () {
    self.item = item;
    self.error= false;
    console.log(self.item);
    self.paymentMethod = angular.copy(paymentModel.paymentMethod);
    self.types = self.getTypes();
    self.checkedType = "1";
  }
  self.ok = function () {
    if(!self.checkValidation()){
      self.error = false;
      self.paymentMethod.pid = self.item.length+1+"";
      var index = self.types.map(function(x){return x.id;}).indexOf(self.checkedType);
      self.paymentMethod.type = self.types[index].name;
      self.paymentMethod.maskCard = self.paymentMethod.cardNumber.replace(/\d(?=\d{4})/g, "*");
      $uibModalInstance.close(self.paymentMethod);
    }else{
      self.error=true;
    }
  };

  self.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  self.getTypes = function () {
    return [{"id":"1","name":"Credit"},{"id":"2","name":"Debit"}]
  }

  self.checkValidation = function (){
    if(self.isEmpty(self.paymentMethod.name) || self.isEmpty(self.paymentMethod.cardNumber) || self.isEmpty(self.paymentMethod.month)
    || self.isEmpty(self.paymentMethod.year) || self.isEmpty(self.paymentMethod.cvv)){
      return true;
    }
    return false;
  }
  self.isEmpty = function(obj) {
    if(obj == null)
    return true;
    else if (obj.length == 0)
    return true;
    return false;
  }
  init();
});
