'use strict';

angular.module('eclipperApp')
.factory('transService', function ($q, $http) {
	var transFactoryService = {};
  var trans = {};
  var _getTransHistory = function ( callback ) {
    var request = {
			method: 'GET',
			url: 'http://ec2-34-216-121-186.us-west-2.compute.amazonaws.com:8000/transactions/transactions'
			//url: configurations.transUrl + configurations.transServiceBase
												//data: {
												//	"UserId" : "prkarve"
												//}
    };

		console.log("Sending GET request")
  	var deferred = $q.defer();

		$http(request).then( function(response){
		    		deferred.resolve(response);
			  	}).catch(function(err){
			  		deferred.reject(err);
			  	});
			  	return deferred.promise;
	};
	
	var _addTrans = function (data) {
		var deferred = $q.defer();
		var request = {
			method: 'POST',
			url: 'http://ec2-34-216-121-186.us-west-2.compute.amazonaws.com:8000/transactions/transactions',
			data: JSON.stringify(data)
			//data: { "ClipperId" : "123", "ServiceId" : "VTA", "Price" : 2.5, "Date" : "3 May 2019"
		};

		console.log("Sending POST request");
		var deferred = $q.defer();

		$http(request).then( function(response){
			deferred.resolve(response);
		}).catch(function(err){
			deferred.reject(err);
		});

		return deferred.promise;
	};

				transFactoryService.getTransHistory = _getTransHistory;
				transFactoryService.addTransaction  = _addTrans;
        return transFactoryService;
});