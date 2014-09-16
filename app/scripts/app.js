'use strict';

/**
 * @ngdoc overview
 * @name adhdApp
 * @description
 * # adhdApp
 *
 * Main module of the application.
 */
angular
  .module('adhdApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/survey', {
        templateUrl: 'views/survey.html',
        controller: 'SurveyCtrl'
      })
      .when('/finish', {
        templateUrl: 'views/finish.html',
        controller: 'FinishCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
