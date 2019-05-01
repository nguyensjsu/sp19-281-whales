/*'use strict';

angular.module('eclipperApp')
.factory('menuService', function ($q, $http) {
	var menuFactoryService = {};
	var menu = {};
	var _getServiceMenu = function () {
		var request = {
			method: 'GET',
			url: "PUT YOUR URL HERE"
		};*/
// UNCOMMENT CODE TO CALL SERVICE
/*
    var deferred = $q.defer();

    $http(request).success( function (response) {
        deferred.resolve(response);
      }).error(function(err){
        deferred.reject(err);
      });


/*      menu =[{
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
});*/

'use strict';

angular.module('eclipperApp')
.factory('menuService', function ($q, $http) {
        var menuFactoryService = {};
        var menu = {};
        var _getServiceMenu = function ( callback ) {
                var request = {
                        method: 'GET',
                        url: "http://ec2-52-12-4-247.us-west-2.compute.amazonaws.com:8080/getMenu?zipcode=95112"
                };
// UNCOMMENT CODE TO CALL SERVICE

    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: "http://ec2-52-12-4-247.us-west-2.compute.amazonaws.com:8080/getMenu?zipcode=95112"
    }).then(function (response){
      deferred.resolve(response);
      console.log(response);
      callback(response.data);
      return;
   },function (error){
      deferred.reject(error);
      return;
   });




        };


        menuFactoryService.getServiceMenu = _getServiceMenu ;


        return menuFactoryService;
});
