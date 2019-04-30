'use strict';

/**
 * @ngdoc overview
 * @name eclipperApp
 * @description
 * # eclipperApp
 *
 * Main module of the application.
 */
angular
  .module('eclipperApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('main', {
		    url: '/',
		    templateUrl: 'views/main.html'
		  })
     .state('home', {
		      url: 'home',
		      parent: 'main',
		      views: {
            'header': {
            templateUrl: 'views/header.html'
          },
		    	  'content': {
		    		templateUrl: 'views/home.html'
          },
          'footer': {
          templateUrl: 'views/contact.html'
          }
		      }
		   })
      $urlRouterProvider.otherwise('home');


  });
