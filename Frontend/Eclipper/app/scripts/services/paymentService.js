"use strict";

angular.module('eclipperApp')
	.factory('paymentService', function ($http, $q, configurations) {

		var paymentServiceFactory = {};
		var _getPayment = function(clipperId){
			var deferred = $q.defer();
			var request = {
				method: 'GET',
				url: configurations.paymentUrl + configurations.paymentServiceBase + '/inquirebalance/'+clipperId
			};

	    	$http(request).success( function(response){
	    		deferred.resolve(response);
		  	}).error(function(err){
		  		deferred.reject(err);
		  	});


		  	return deferred.promise;
		};


		var _addFunds = function () {
			var deferred = $q.defer();
			var request = {
				method: 'POST',
				url: configurations.paymentUrl + configurations.paymentServiceBase + '/',
				data: JSON.stringify(data)
			};

	    	$http(request).success( function(response){
	    		deferred.resolve(response);
		  	}).error(function(err){
		  		deferred.reject(err);
		  	});
			return deferred.promise;
		};

		var _payFare = function () {
			var deferred = $q.defer();
			var request = {
				method: 'POST',
				url: configurations.paymentUrl + configurations.paymentServiceBase + '/',
			};

	    	$http(request).success( function(response){
	    		deferred.resolve(response);
		  	}).error(function(err){
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

        $http(request).success( function(response){
          deferred.resolve(response);
        }).error(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
    };



		paymentServiceFactory.getPayment = _getPayment;
		paymentServiceFactory.addFunds = _addFunds;
		paymentServiceFactory.payFare = _payFare;
		paymentServiceFactory.deletePayment = _deletePayment;

		return paymentServiceFactory;
  })
