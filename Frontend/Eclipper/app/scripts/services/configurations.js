'use strict';


angular.module('eclipperApp')
 .constant('configurations',{
  'paymentUrl':'http://localhost:3000',
	'paymentServiceBase': '/clipperpayments',
	'contentType':'application/x-www-form-urlencoded',
	'acceptType':'application/json'
  });
