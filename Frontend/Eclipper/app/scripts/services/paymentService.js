"use strict";

angular.module('eclipperApp')
	.factory('paymentService', function ($http, $q, configurations, paymentModel) {

		var paymentServiceFactory = {};
    var _createPaymentAccount = function(clipperId){
      var data = paymentModel.payment;
      data.clipperId = clipperId;
      var deferred = $q.defer();
      var request = {
        method: 'POST',
        url: configurations.paymentUrl + configurations.paymentServiceBase + '/addaccount',
        data: JSON.stringify(data),
        headers: { 'Content-Type': configurations.contentType, 'Accept': configurations.acceptType }
      };

        $http(request).then( function(response){
          deferred.resolve(response);
        }).catch(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
    }
		var _getPayment = function(clipperId){
			var deferred = $q.defer();
			var request = {
				method: 'GET',
				url: configurations.paymentUrl + configurations.paymentServiceBase + '/'+clipperId
			};

	    	$http(request).then( function(response){
	    		deferred.resolve(response);
		  	}).catch(function(err){
		  		deferred.reject(err);
		  	});


		  	return deferred.promise;
		};


		var _addFunds = function (data) {
			data.balance = parseFloat(data.balance)
			var deferred = $q.defer();
			var request = {
				method: 'POST',
				url: configurations.paymentUrl + configurations.paymentServiceBase + '/addfunds',
				data: JSON.stringify(data),
        headers: { 'Content-Type': configurations.contentType, 'Accept': configurations.acceptType }
			};

	    	$http(request).then( function(response){
	    		deferred.resolve(response);
          console.log(response);
		  	}).catch(function(err){
		  		deferred.reject(err);
		  	});
			return deferred.promise;
		};

		var _payFare = function (data) {
			data.balance = parseFloat(data.balance)
			var deferred = $q.defer();
      var request = {
        method: 'POST',
        url: configurations.paymentUrl + configurations.paymentServiceBase + '/payfare',
        data: JSON.stringify(data),
        headers: { 'Content-Type': configurations.contentType, 'Accept': configurations.acceptType }
      };

	    	$http(request).then( function(response){
	    		deferred.resolve(response);
          console.log(response);
		  	}).catch(function(err){
		  		deferred.reject(err);
		  	});
			return deferred.promise;
		};
    var _deletePayment = function (clipperId) {
      var deferred = $q.defer();
      var request = {
        method: 'Delete',
        url: configurations.paymentUrl + configurations.paymentServiceBase + '/'+clipperId,
      };

        $http(request).then( function(response){
          deferred.resolve(response);
        }).catch(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
    };

    var _addPaymentMethod = function (data) {
			data.balance = parseFloat(data.balance)
      var deferred = $q.defer();
      var request = {
        method: 'POST',
        url: configurations.paymentUrl + configurations.paymentServiceBase + '/paymentMethod',
        data: JSON.stringify(data),
        headers: { 'Content-Type': configurations.contentType, 'Accept': configurations.acceptType }
      };

        $http(request).then( function(response){
          deferred.resolve(response);
        }).catch(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
    };

		paymentServiceFactory.getPayment = _getPayment;
    paymentServiceFactory.createPaymentAccount = _createPaymentAccount;
		paymentServiceFactory.addFunds = _addFunds;
		paymentServiceFactory.payFare = _payFare;
		paymentServiceFactory.deletePayment = _deletePayment;
    paymentServiceFactory.addPaymentMethod = _addPaymentMethod;

		return paymentServiceFactory;
  })
