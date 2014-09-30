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
    'duScroll',
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'angularFileUpload',
    'mm.foundation',
    'angular-carousel'
  ])
  .run(function ($rootScope, $state){
    $rootScope.$state = $state;
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
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
      // onEnter: function ($state, $modal, $rootScope){
      //   $modal.open({
      //     templateUrl: 'views/contact.html',
      //     controller: 'ContactCtrl'
      //   }).result.finally(function(){
      //     var returnState = $rootScope.previousState ? $rootScope.previousState : 'home';
      //     $state.go(returnState);
      //   });
      // }
    });
  })

  .config(function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  })

  .config(function ($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });




