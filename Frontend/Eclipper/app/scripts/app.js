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
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'ui.mask'
  ])
  .config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
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
          }
		      }
		   })
       .state('team', {
           url: 'team',
           parent: 'main',
           views: {
              'header': {
              templateUrl: 'views/header.html'
            },
             'content': {
             templateUrl: 'views/contact.html'
            }
           }
        })
        .state('menu', {
            url: 'menu',
            parent: 'main',
            views: {
               'header': {
               templateUrl: 'views/header.html'
             },
              'content': {
              templateUrl: 'views/servicemenu.html'
             }
            }
         })
        .state('login', {
            url: 'login',
            parent: 'main',
            views: {
               'header': {
               templateUrl: 'views/header.html'
             },
              'content': {
              templateUrl: 'views/login.html'
             }
            }
         })
        .state('signup', {
            url: 'signup',
            parent: 'main',
            views: {
               'header': {
               templateUrl: 'views/header.html'
             },
              'content': {
              templateUrl: 'views/signup.html'
             }
            }
         })
         .state('services', {
             url: 'services',
             parent: 'main',
             views: {
                'header': {
                templateUrl: 'views/header.html'
              },
               'content': {
               templateUrl: 'views/services.html'
              }
             }
          })
          .state('payment', {
              url: 'payment',
              parent: 'main',
              views: {
                 'header': {
                 templateUrl: 'views/header.html'
               },
                'content': {
                templateUrl: 'views/payment.html'
               }
              }
           })
      $urlRouterProvider.otherwise('/home');
      localStorageServiceProvider.setStorageType('localStorage');




  })
  .run(function(localStorageService){
      localStorageService.set('userData',{"clipperId":"4"});
  });
