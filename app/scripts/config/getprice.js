'use strict';

angular.module('health3App')
.config(function($stateProvider){
	$stateProvider
	.state('get-price', {
    url: '/get-price',
    templateUrl: 'views/getprice.html',
    controller: 'PriceCtrl'
  })

  .state('get-price.policy', {
    url: '/',
    templateUrl: 'views/list-select.html',
    controller: 'PricePolicyCtrl'
  })

  .state('get-price.state', {
    url: '/:policy',
    templateUrl: 'views/list-select.html',
    controller: 'PriceStateCtrl'
  })

  .state('get-price.age', {
    url: '/:policy/:state',
    templateUrl: 'views/list-select.html',
    controller: 'PriceAgeCtrl'
  })

  .state('get-price.income', {
    url: '/:policy/:state/:age',
    templateUrl: 'views/list-select.html',
    controller: 'PriceIncomeCtrl'
  });
});