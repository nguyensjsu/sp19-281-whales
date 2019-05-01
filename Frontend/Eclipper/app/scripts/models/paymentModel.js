'use strict';

angular.module('eclipperApp')
	.factory('paymentModel', function () {
    var paymentModelFactory = {};
			var payment= {
				  clipperId:"",
          balance:0.00,
          funds:0.00,
          fare:0.00,
          paymentMethods:[]
			};
      var paymentMethod = {
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
