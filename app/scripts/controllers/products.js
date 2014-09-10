'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('ProductsCtrl', function ($scope, products) {

  	$scope.products = {};
  	$scope.productsIndex = 3;

    products.get(function(data){
    	$scope.products = data;
    });

  });
