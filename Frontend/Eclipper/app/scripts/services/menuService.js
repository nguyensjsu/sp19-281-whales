'use strict';

angular.module('eclipperApp')
.factory('menuService', function ($q, $http) {
	var menuFactoryService = {};
	var menu = {};
	var _getServiceMenu = function () {
		var request = {
			method: 'GET',
			url: "PUT YOUR URL HERE"
		};
// UNCOMMENT CODE TO CALL SERVICE
/*
    var deferred = $q.defer();

    $http(request).success( function (response) {
        deferred.resolve(response);
      }).error(function(err){
        deferred.reject(err);
      });


      return deferred.promise;*/
      menu =[{
        name:"VTA",
        price:"10",
        location:"Near SJSU"
      },
      {
        name:"FordBike",
        price:"5",
        location:"San Fernando"
      }
      ,
      {
        name:"Caltrain",
        price:"5",
        location:"San Fernando East"
      }]
		return menu;
	};


	menuFactoryService.getServiceMenu = _getServiceMenu ;


	return menuFactoryService;
});
