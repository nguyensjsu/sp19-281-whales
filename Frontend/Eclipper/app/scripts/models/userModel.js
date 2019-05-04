'use strict';

angular.module('eclipperApp')
	.factory('userModel', function () {
    var userModelFactory = {};
			var user= {
				  firstname:"",
          lastname: "",
          phone: "",
          email:"",
          password: "",
          username: "",
          clipperflag: "",
          clipperid: "",
          address:[]
			};
      var address = {
				street: "",
        city: "",
        state: "",
        zipcode: ""
      }
      userModelFactory.user = user;
      userModelFactory.address = address;
      return userModelFactory;
	});
