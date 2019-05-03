'use strict';


angular.module('eclipperApp')
 .constant('configurations',{
  'paymentUrl':'http://paymentELB-1601953061.us-east-1.elb.amazonaws.com',
	'paymentServiceBase': '/clipperpayments',
	'contentType':'application/x-www-form-urlencoded',
	'acceptType':'application/json'
  });
