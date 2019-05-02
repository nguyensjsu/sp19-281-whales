'use strict';

angular.module('eclipperApp')
	.factory('paymentModel', function () {
    var paymentModelFactory = {};
			var payment= {
				  clipperId:"",
          balance:parseFloat("0.00"),
          funds: parseFloat("0.00"),
          fare:parseFloat("0.00"),
          paymentMethods:[]
			};
      var paymentMethod = {
				pid:"",
        name:"",
        cardNumber:"",
        month:"",
        year:"",
        type:"",
        cvv:""
      }
      paymentModelFactory.payment = payment;
      paymentModelFactory.paymentMethod = paymentMethod;
      return paymentModelFactory;
	});
