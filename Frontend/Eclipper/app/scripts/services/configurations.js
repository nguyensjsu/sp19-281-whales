'use strict';


angular.module('eclipperApp')
 .constant('configurations',{
  'paymentUrl':'http://ec2-54-185-145-121.us-west-2.compute.amazonaws.com:8000/paymentapi',
	'paymentServiceBase': '/clipperpayments',
	'contentType':'application/x-www-form-urlencoded',
	'acceptType':'application/json'
  });
