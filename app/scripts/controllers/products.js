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

  	var sample_products = 'SE60,B65,HCM65,H85,V65';

    products.get(sample_products, function(data){
    	$scope.products = data;
    });

  });
