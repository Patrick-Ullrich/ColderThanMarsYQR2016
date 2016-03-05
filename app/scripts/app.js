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
  .directive('custom-graph', [function() {
    return {
      template: '',
      restrict: 'E',
      scope: {

      }, 
      link: function(scope, element, attrs)
       {

       },
       controller: function($scope) {

       }    
     };
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/1990.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/1990', {
        templateUrl: 'views/1990.html',
        controller: 'MainCtrl',
        controllerAs: 'mail'
      })
      .when('/1995', {
        templateUrl: 'views/1995.html',
        controller: 'MainCtrl',
        controllerAs: 'mail'
      })
      .when('/2000', {
        templateUrl: 'views/2000.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/2005', {
        templateUrl: 'views/2005.html',
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
      .otherwise({
        redirectTo: '/'
      });
  });
