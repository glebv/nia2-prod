'use strict';
/* global _ */
/**
 * @ngdoc directive
 * @name health3App.directive:product
 * @description
 * # product
 */
angular.module('health3App')
  .directive('product', function ($state) {
    return {
      templateUrl: 'templates/product.html',
      restrict: 'E',
      scope: {
      	product: '=',
        states: '='
      },
      link: function(scope) {
        scope.showDetails = false;

        scope.hospitals = function(slug){
        	return _.filter(scope.product.hospitals, function(h){
        		return h.covered_slug === slug;
        	});
        };

        scope.showInfo = function(panel){
          if(panel === 'details') scope.showDetails = true;
          else scope.showDetails = false;
        };

        scope.getDetails = function(product){
          $state.go('get-price.policy', {product: product});
        };
      }
    };
  });
