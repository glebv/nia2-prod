'use strict';

/**
 * @ngdoc directive
 * @name health3App.directive:product
 * @description
 * # product
 */
angular.module('health3App')
  .directive('product', function () {
    return {
      templateUrl: 'templates/product.html',
      restrict: 'E',
      scope: {
      	product: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.hospitals = function(slug){
        	return _.filter(scope.product.hospitals, function(h){
        		return h.covered_slug === slug;
        	});
        }
      }
    };
  });
