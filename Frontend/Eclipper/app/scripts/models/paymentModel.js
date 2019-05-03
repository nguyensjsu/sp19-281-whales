'use strict';

angular.module('eclipperApp')
	.factory('paymentModel', function () {
    var paymentModelFactory = {};
			var payment= {
				  clipperId:"",
          balance:parseFloat("0.00").toFixed(2),
          funds: parseFloat("0.00").toFixed(2),
          fare:parseFloat("0.00").toFixed(2),
          paymentMethods:[]
			};
      var paymentMethod = {
				pid:"",
        name:"",
        cardNumber:"",
        month:"",
        year:"",
        type:"",
        cvv:"",
				maskCard:""

      }
      paymentModelFactory.payment = payment;
      paymentModelFactory.paymentMethod = paymentMethod;
      return paymentModelFactory;
	});
