'use strict';

/**
 * @ngdoc function
 * @name health3App.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the health3App
 */
angular.module('health3App')
  .controller('HomeCtrl', function ($scope, $rootScope, $state, Products, Testimonials, Reasons) {
    $scope.testimonials = Testimonials.testimonials;
    $scope.reasons = Reasons.reasons;

    Products.get($rootScope.sampleProducts)
    .then(function(data){
    	$scope.products = data;
      $rootScope.products = data;
      $rootScope.productsLoaded = true;
    });

    $scope.seeProduct = function(slideIndex){
    	$state.go('products.viewOne', {slide: slideIndex});
    };
  });
