'use strict';

/**
 * @ngdoc overview
 * @name colderThanMarsYqr2016App
 * @description
 * # colderThanMarsYqr2016App
 *
 * Main module of the application.
 */
angular
  .module('colderThanMarsYqr2016App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2006', {
        templateUrl: 'views/2006.html',
        controller: 'MainCtrl',
        controllerAs: 'mail'
      })
      .when('/2007', {
        templateUrl: 'views/2007.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2008', {
        templateUrl: 'views/2008.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2009', {
        templateUrl: 'views/2009.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2010', {
        templateUrl: 'views/2010.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2011', {
        templateUrl: 'views/2011.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2012', {
        templateUrl: 'views/2012.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2013', {
        templateUrl: 'views/2013.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2014', {
        templateUrl: 'views/2014.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2015', {
        templateUrl: 'views/2015.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
