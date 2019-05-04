'use strict';

angular.module('eclipperApp')
.factory('userService', function ($q, $http) {
        var userFactoryService = {};
        var user = {};
      var _signup = function (data) {
      var deferred = $q.defer();
      var request = {
        method: 'POST',
        url: 'http://ec2-54-184-6-91.us-west-2.compute.amazonaws.com:8000/users/signup',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      };

        $http(request).then( function(response){
          deferred.resolve(response);
        }).catch(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
    };


    var _signin = function (data) {
      var deferred = $q.defer();
      var request = {
        method: 'POST',
        url: 'http://ec2-54-184-6-91.us-west-2.compute.amazonaws.com:8000/users/signin',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
      };

        $http(request).then( function(response){
          deferred.resolve(response);
          
        }).catch(function(err){
          deferred.reject(err);
        });
      return deferred.promise;
    };

        userFactoryService.signup = _signup ;
        userFactoryService.signin = _signin ;
        return userFactoryService;
})