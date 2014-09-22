'use strict';

/**
 * @ngdoc overview
 * @name health3App
 * @description
 * # health3App
 *
 * Main module of the application.
 */
angular
  .module('health3App', [
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngAnimate',
    'angularFileUpload',
    'mm.foundation',
    'angular-carousel'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'HomeCtrl'
    })

    .state('whyus', {
      url: '/why-us',
      templateUrl: 'views/whyus.html',
      controller: 'WhyUsCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    });
  })

  .config(function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  })

  .config(function ($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });




